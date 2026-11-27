// Cloudflare Turnstile: free, privacy-friendly spam check (usually invisible to real visitors).
// The browser gets a one-time token from the widget; the server confirms it with Cloudflare here.
// Keys: https://dash.cloudflare.com → Turnstile → Add site.

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** @returns {Promise<{ ok: boolean, reason?: string }>} */
export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    // Never skip the check on the live site: if the key is missing, refuse (fail closed).
    if (process.env.NODE_ENV === 'production') return { ok: false, reason: 'not-configured' };
    console.warn('[enquiry] TURNSTILE_SECRET_KEY is not set: spam check skipped (development only).');
    return { ok: true };
  }
  if (typeof token !== 'string' || !token || token.length > 2048) return { ok: false, reason: 'missing-token' };

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch(VERIFY_URL, { method: 'POST', body, signal: AbortSignal.timeout(5000), cache: 'no-store' });
    const data = await res.json();
    if (!data.success) return { ok: false, reason: 'failed' };
    if (data.action && data.action !== 'enquiry') return { ok: false, reason: 'wrong-action' };
    const expectedHost = process.env.SITE_HOSTNAME; // e.g. edasprojects.com (optional extra check)
    if (expectedHost && data.hostname && data.hostname !== expectedHost && data.hostname !== `www.${expectedHost}`) {
      return { ok: false, reason: 'wrong-host' };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: 'unreachable' };
  }
}
