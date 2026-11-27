'use client';

import { useState } from 'react';

// Enquiry form built from a config in src/data (fields, message id, button label, email).
// There is no backend yet: on a valid submit it shows the same "Thank you" note as the original site,
// pointing people to the email address.
export default function ContactForm({ email, fields, messageId, submitLabel }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
  };

  return (
    <>
      <form className="card form" data-enquiry={email} noValidate onSubmit={onSubmit}>
        <div className="fields">
          {fields.map((f) => (
            <div className="field" key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              {f.options ? (
                <select id={f.id}>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input id={f.id} type={f.type} autoComplete={f.autoComplete} required={f.required} />
              )}
            </div>
          ))}
        </div>
        <div className="field">
          <label htmlFor={messageId}>Message</label>
          <textarea id={messageId}></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">{submitLabel}</button>
        </div>
      </form>
      {sent && (
        <div className="form-ok" role="status">
          <b>Thank you.</b> Online enquiries are being set up. Until then, please write to{' '}
          <span className="copyable">{email}</span> and the team will reply within one working day.
        </div>
      )}
    </>
  );
}
