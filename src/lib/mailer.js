// Sends enquiry emails with Nodemailer through the company mailbox (SMTP).
// All settings come from server-only environment variables (see .env.example).
import nodemailer from 'nodemailer';

let transporter;

export function mailIsConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ENQUIRY_TO);
}

function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // 465 = TLS from the start
      requireTLS: port !== 465, // 587 = must upgrade to TLS (STARTTLS), never send in plain text
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { minVersion: 'TLSv1.2' },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return transporter;
}

// Escape anything a visitor typed before it goes into the HTML email
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Subject lines can never contain line breaks (prevents email header injection)
const oneLine = (value, max = 120) => String(value).replace(/[\r\n\t]+/g, ' ').slice(0, max).trim();

const istTime = () =>
  new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }).format(new Date());

/**
 * @param {{ form: object, values: Record<string,string>, page?: string }} enquiry
 */
export async function sendEnquiryEmail({ form, values, page }) {
  const rows = form.fields.map((f) => [f.label, values[f.name]]).filter(([, v]) => v);
  const when = istTime();
  const who = values.name || 'website visitor';
  const subject = oneLine(`[${form.title}] New enquiry from ${who}`);

  const text = [
    `New ${form.title} enquiry from the EDAS website`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    values.message || '(no message)',
    '',
    `Received: ${when} IST${page ? ` · Page: ${page}` : ''}`,
  ].join('\n');

  const cell = 'padding:8px 12px;border:1px solid #E4E4E0;vertical-align:top;';
  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#F5F5F2;font-family:Arial,Helvetica,sans-serif;color:#16191F">
<table role="presentation" style="max-width:640px;width:100%;margin:0 auto;background:#fff;border-radius:10px;border-collapse:separate;padding:24px">
<tr><td>
<p style="margin:0 0 4px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#B8641F">${esc(form.title)}</p>
<h1 style="margin:0 0 18px;font-size:20px;color:#2C3E66">New enquiry from ${esc(who)}</h1>
<table style="width:100%;border-collapse:collapse;font-size:14px">
${rows.map(([k, v]) => `<tr><th align="left" style="${cell}width:38%;background:#F5F5F2">${esc(k)}</th><td style="${cell}">${esc(v)}</td></tr>`).join('\n')}
</table>
<p style="margin:18px 0 6px;font-weight:bold">Message</p>
<div style="white-space:pre-wrap;font-size:14px;line-height:1.55;padding:12px;border:1px solid #E4E4E0;border-radius:8px">${esc(values.message || '(no message)')}</div>
<p style="margin:18px 0 0;font-size:12px;color:#5B626C">Received ${esc(when)} IST${page ? ` · Page: ${esc(page)}` : ''}${values.email ? ' · Reply to this email to answer the visitor directly.' : ''}</p>
</td></tr></table></body></html>`;

  await getTransporter().sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.ENQUIRY_TO,
    // Reply goes to the visitor. "From" stays the company address so the email isn't marked as spoofed.
    replyTo: values.email ? { name: oneLine(values.name || '', 80), address: values.email } : undefined,
    subject,
    text,
    html,
  });
}
