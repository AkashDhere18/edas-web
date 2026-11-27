// Limits how often one visitor (or one email address) can submit.
//
// - With UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN set, counts are kept in Upstash Redis
//   (free tier is enough). Use this on Vercel/serverless, where each server instance has its own memory.
// - Without them, counts are kept in this server's memory. That is fine on a single Node server
//   (VPS, PM2, Hostinger Node), but resets when the server restarts.
//
// Keys are hashed before use, so no IP address or email is stored in plain text.

const memory = new Map();

function hitMemory(key, windowSec) {
  const now = Date.now();
  if (memory.size > 5000) {
    for (const [k, v] of memory) if (v.resetAt <= now) memory.delete(k);
  }
  let entry = memory.get(key);
  if (!entry || entry.resetAt <= now) {
    entry = { count: 0, resetAt: now + windowSec * 1000 };
    memory.set(key, entry);
  }
  entry.count += 1;
  return { count: entry.count, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
}

async function hitUpstash(key, windowSec) {
  const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, String(windowSec), 'NX'],
      ['TTL', key],
    ]),
    signal: AbortSignal.timeout(3000),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const [incr, , ttl] = await res.json();
  return { count: Number(incr.result), retryAfter: Math.max(1, Number(ttl.result)) };
}

/**
 * Counts one attempt for `key` and says whether it is within `limit` per `windowSec`.
 * @returns {Promise<{ ok: boolean, retryAfter: number }>}
 */
export async function rateLimit(key, limit, windowSec) {
  const fullKey = `edas:rl:${key}:${windowSec}`;
  let hit;
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      hit = await hitUpstash(fullKey, windowSec);
    } catch {
      hit = hitMemory(fullKey, windowSec); // Redis unreachable: still limit, never block everyone
    }
  } else {
    hit = hitMemory(fullKey, windowSec);
  }
  return { ok: hit.count <= limit, retryAfter: hit.retryAfter };
}
