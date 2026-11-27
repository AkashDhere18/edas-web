// POST /api/enquiry — one endpoint for every enquiry form on the site.
// Every request goes through these checks, in order, before an email is sent:
//   1. same-site only (Origin must match this site)      5. Cloudflare Turnstile spam check
//   2. JSON only, size capped                             6. full validation (same rules as the browser)
//   3. honeypot + "filled in too fast" bot traps          7. limit per email address
//   4. limit per visitor (IP)                             8. send with Nodemailer
import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { FORMS } from '@/lib/forms';
import { validateEnquiry } from '@/lib/validation';
import { rateLimit } from '@/lib/rateLimit';
import { verifyTurnstile } from '@/lib/turnstile';
import { mailIsConfigured, sendEnquiryEmail } from '@/lib/mailer';

export const runtime = 'nodejs'; // Nodemailer needs Node.js (not the Edge runtime)
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 16 * 1024;
const MIN_FILL_MS = 3000; // humans take longer than 3 s to fill a form
const LIMITS = {
  ipShort: [5, 15 * 60], // 5 submissions per 15 minutes per visitor
  ipDaily: [20, 24 * 60 * 60], // 20 per day per visitor
  email: [3, 60 * 60], // 3 per hour per email address
};

const reply = (status, body, headers = {}) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

const hash = (value) => createHash('sha256').update(`${process.env.RATE_LIMIT_SALT || 'edas'}:${value}`).digest('hex').slice(0, 32);

// Visitor IP as reported by the host (Vercel) or your proxy (Nginx: X-Real-IP $remote_addr).
// The LAST X-Forwarded-For entry is the one added by your own proxy; earlier entries can be faked.
function clientIp(request) {
  const real = request.headers.get('x-real-ip');
  if (real) return real.trim();
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded ? forwarded.split(',').pop() : '').trim() || 'unknown';
}

function isSameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

const safePage = (page) => (typeof page === 'string' && /^\/[a-z0-9/-]{0,80}$/.test(page) ? page : undefined);

export async function POST(request) {
  // 1. only accept requests sent from this website
  if (!isSameOrigin(request)) return reply(403, { ok: false, message: 'Request not allowed.' });

  // 2. JSON only, small bodies only
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    return reply(415, { ok: false, message: 'Unsupported request.' });
  }
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return reply(413, { ok: false, message: 'Your message is too long.' });
  }
  let body;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return reply(413, { ok: false, message: 'Your message is too long.' });
    body = JSON.parse(raw);
  } catch {
    return reply(400, { ok: false, message: 'Invalid request.' });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, { ok: false, message: 'Invalid request.' });

  const form = Object.hasOwn(FORMS, body.form) ? FORMS[body.form] : null;
  if (!form) return reply(400, { ok: false, message: 'Unknown form.' });

  // 3. bot traps: answer "ok" so bots don't learn they were caught, but send nothing
  const startedAt = Number(body.startedAt);
  if (body.website || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return reply(200, { ok: true });
  }

  // 4. limit per visitor (IP is hashed, never stored)
  const ip = clientIp(request);
  const ipKey = hash(ip);
  for (const [name, [limit, windowSec]] of [['ipShort', LIMITS.ipShort], ['ipDaily', LIMITS.ipDaily]]) {
    const rl = await rateLimit(`${name}:${ipKey}`, limit, windowSec);
    if (!rl.ok) {
      return reply(
        429,
        { ok: false, message: 'You have sent several enquiries already. Please try again later, or write to us directly.' },
        { 'Retry-After': String(rl.retryAfter) },
      );
    }
  }

  // 5. spam check
  const captcha = await verifyTurnstile(body.token, ip);
  if (!captcha.ok) {
    if (captcha.reason === 'not-configured') {
      console.error('[enquiry] TURNSTILE_SECRET_KEY is missing in production.');
      return reply(503, { ok: false, message: 'Online enquiries are unavailable right now.' });
    }
    return reply(403, { ok: false, message: 'The spam check failed. Please try again.' });
  }

  // 6. validate everything again on the server (never trust the browser)
  const { values, errors } = validateEnquiry(form, body.fields);
  if (Object.keys(errors).length) return reply(400, { ok: false, errors });

  // 7. limit per email address
  if (values.email) {
    const rl = await rateLimit(`email:${hash(values.email.toLowerCase())}`, ...LIMITS.email);
    if (!rl.ok) {
      return reply(
        429,
        { ok: false, message: 'We have already received several enquiries from this email. The team will be in touch.' },
        { 'Retry-After': String(rl.retryAfter) },
      );
    }
  }

  // 8. send
  if (!mailIsConfigured()) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[enquiry] SMTP settings are missing in production.');
      return reply(503, { ok: false, message: 'Online enquiries are unavailable right now.' });
    }
    console.info('[enquiry] SMTP not configured (development): enquiry accepted but not emailed.', form.id);
    return reply(200, { ok: true });
  }
  try {
    await sendEnquiryEmail({ form, values, page: safePage(body.page) });
  } catch (error) {
    // log the reason, never the visitor's details
    console.error('[enquiry] email failed:', error?.code || error?.name || 'unknown error');
    return reply(502, { ok: false, message: 'We could not send your enquiry right now.' });
  }

  return reply(200, { ok: true });
}
