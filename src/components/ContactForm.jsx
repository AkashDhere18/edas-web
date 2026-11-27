// 'use client';

// import { useState } from 'react';

// // Enquiry form built from a config in src/data (fields, message id, button label, email).
// // There is no backend yet: on a valid submit it shows the same "Thank you" note as the original site,
// // pointing people to the email address.
// export default function ContactForm({ email, fields, messageId, submitLabel }) {
//   const [sent, setSent] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     if (!form.checkValidity()) {
//       form.reportValidity();
//       return;
//     }
//     setSent(true);
//   };

//   return (
//     <>
//       <form className="card form" data-enquiry={email} noValidate onSubmit={onSubmit}>
//         <div className="fields">
//           {fields.map((f) => (
//             <div className="field" key={f.id}>
//               <label htmlFor={f.id}>{f.label}</label>
//               {f.options ? (
//                 <select id={f.id}>
//                   {f.options.map((o) => (
//                     <option key={o}>{o}</option>
//                   ))}
//                 </select>
//               ) : (
//                 <input id={f.id} type={f.type} autoComplete={f.autoComplete} required={f.required} />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="field">
//           <label htmlFor={messageId}>Message</label>
//           <textarea id={messageId}></textarea>
//         </div>
//         <div>
//           <button className="btn btn-primary" type="submit">{submitLabel}</button>
//         </div>
//       </form>
//       {sent && (
//         <div className="form-ok" role="status">
//           <b>Thank you.</b> Online enquiries are being set up. Until then, please write to{' '}
//           <span className="copyable">{email}</span> and the team will reply within one working day.
//         </div>
//       )}
//     </>
//   );
// }

// ****************************

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { maxLengthOf, validateEnquiry, LIMITS } from '@/lib/validation';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Enquiry form built from a config in src/data (id, fields, message id, button label, fallback email).
// Checks run here for instant feedback and again on the server, which is the check that counts.
export default function ContactForm({ id, email, fields, messageId, submitLabel }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');
  const [tried, setTried] = useState(false);
  const formRef = useRef(null);
  const startedAt = useRef(0);
  const widgetBox = useRef(null);
  const widgetId = useRef(null);
  const token = useRef('');

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Cloudflare Turnstile widget (spam check)
  const mountWidget = useCallback(() => {
    if (!SITE_KEY || !window.turnstile || !widgetBox.current || widgetId.current !== null) return;
    widgetId.current = window.turnstile.render(widgetBox.current, {
      sitekey: SITE_KEY,
      action: 'enquiry',
      size: 'flexible',
      theme: document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
      callback: (t) => { token.current = t; },
      'expired-callback': () => { token.current = ''; },
      'error-callback': () => { token.current = ''; },
    });
  }, []);

  useEffect(() => {
    mountWidget();
    return () => {
      if (widgetId.current !== null && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [mountWidget]);

  const resetWidget = () => {
    token.current = '';
    if (widgetId.current !== null && window.turnstile) window.turnstile.reset(widgetId.current);
  };

  const readForm = () => {
    const data = new FormData(formRef.current);
    const values = { message: data.get('message') || '' };
    for (const f of fields) values[f.name] = data.get(f.name) || '';
    return values;
  };

  const focusFirstError = (errs) => {
    const first = [...fields.map((f) => f.name), 'message'].find((n) => errs[n]);
    if (first) formRef.current.elements[first]?.focus();
  };

  // after the first submit attempt, re-check as the visitor corrects things
  const onInput = () => {
    if (tried) setErrors(validateEnquiry({ fields }, readForm()).errors);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setTried(true);
    setNotice('');

    const values = readForm();
    const { errors: errs } = validateEnquiry({ fields }, values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      focusFirstError(errs);
      return;
    }
    if (SITE_KEY && !token.current) {
      setStatus('error');
      setNotice('Please wait for the spam check below to finish, then send again.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: id,
          fields: values,
          token: token.current,
          website: formRef.current.elements.website?.value || '', // honeypot
          startedAt: startedAt.current,
          page: window.location.pathname,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus('sent');
        setErrors({});
        setTried(false);
        formRef.current.reset();
        startedAt.current = Date.now();
      } else if (res.status === 400 && data.errors) {
        setStatus('idle');
        setErrors(data.errors);
        focusFirstError(data.errors);
      } else {
        setStatus('error');
        setNotice(data.message || 'We could not send your enquiry right now.');
      }
    } catch {
      setStatus('error');
      setNotice('We could not send your enquiry. Please check your connection and try again.');
    } finally {
      resetWidget(); // Turnstile tokens work only once
    }
  };

  const errorProps = (name, inputId) =>
    errors[name] ? { 'aria-invalid': 'true', 'aria-describedby': `${inputId}-error` } : {};

  return (
    <>
      {SITE_KEY && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={mountWidget} />
      )}
      <form ref={formRef} className="card form" data-enquiry={email} noValidate onSubmit={onSubmit} onInput={onInput}>
        <div className="fields">
          {fields.map((f) => (
            <div className="field" key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              {f.options ? (
                <select id={f.id} name={f.name} {...errorProps(f.name, f.id)}>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={f.id}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required={f.required}
                  maxLength={maxLengthOf(f)}
                  inputMode={f.type === 'tel' ? 'tel' : undefined}
                  {...errorProps(f.name, f.id)}
                />
              )}
              {errors[f.name] && <p className="field-error" id={`${f.id}-error`}>{errors[f.name]}</p>}
            </div>
          ))}
        </div>
        <div className="field">
          <label htmlFor={messageId}>Message</label>
          <textarea id={messageId} name="message" maxLength={LIMITS.message} {...errorProps('message', messageId)}></textarea>
          {errors.message && <p className="field-error" id={`${messageId}-error`}>{errors.message}</p>}
        </div>

        {/* Honeypot: hidden from people, bots fill it in */}
        <div className="hp" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Leave this empty</label>
          <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {SITE_KEY && <div ref={widgetBox} className="turnstile-box"></div>}

        <div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'} aria-busy={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : submitLabel}
          </button>
        </div>
        {status === 'sent' && (
          <div className="form-ok" role="status">
            <b>Thank you.</b> Your enquiry has been sent. The team will reply within one working day.
          </div>
        )}
        {status === 'error' && notice && (
          <div className="form-error" role="alert">
            <b>Not sent.</b> {notice} You can also write to <span className="copyable">{email}</span>.
          </div>
        )}
        <p className="note">We use these details only to reply to your enquiry.</p>
      </form>

    </>
  );
}

