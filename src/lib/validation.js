// // Enquiry form validation. The SAME rules run in the browser (instant feedback)
// // and on the server (the real check — browser checks can always be bypassed).
// // No Node-only or browser-only code in this file, so both sides can import it.

// export const LIMITS = {
//   name: 80,
//   email: 254,
//   phone: 12,
//   text: 120,
//   message: 2000,
//   maxLinks: 2, // links allowed in the message (spam usually has many)
// };

// // Control characters (except tab/newline) are never legitimate in a form field
// const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u2028\u2029\uFEFF]/g;
// const EMAIL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
// const PERSON_NAME = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
// const PHONE = /^\+?[0-9 ().-]+$/;
// const LINK = /(https?:\/\/|www\.)/gi;

// // Trim, remove control characters and collapse spaces. Messages keep their line breaks.
// export function clean(value, { multiline = false } = {}) {
//   if (typeof value !== 'string') return '';
//   let v = value.replace(CONTROL_CHARS, '');
//   v = multiline ? v.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n') : v.replace(/\s+/g, ' ');
//   return v.trim();
// }

// // What kind of check a field needs, worked out from its config
// function kindOf(field) {
//   if (field.options) return 'select';
//   if (field.type === 'email') return 'email';
//   if (field.type === 'tel') return 'phone';
//   if (field.name === 'name') return 'name';
//   return 'text';
// }

// export function maxLengthOf(field) {
//   return LIMITS[kindOf(field)] ?? LIMITS.text;
// }

// function checkField(field, value) {
//   const label = field.label.toLowerCase();
//   const kind = kindOf(field);

//   if (!value) {
//     if (!field.required) return null;
//     return kind === 'select' ? `Please choose ${label}.` : `Please enter your ${label}.`;
//   }
//   if (value.length > maxLengthOf(field)) return `Please keep this under ${maxLengthOf(field)} characters.`;

//   switch (kind) {
//     case 'select':
//       return field.options.includes(value) ? null : 'Please choose one of the options.';
//     case 'email':
//       return EMAIL.test(value) ? null : 'Please enter a valid email address, like name@example.com.';
//     case 'phone': {
//       const digits = value.replace(/\D/g, '').length;
//       return PHONE.test(value) && digits >= 10 && digits <= 10 ? null : 'Please enter a valid phone number.';
//     }
//     case 'name':
//       return value.length >= 2 && PERSON_NAME.test(value) ? null : 'Please enter your name using letters only.';
//     default:
//       return LINK.test(value) ? 'Please remove links from this field.' : null;
//   }
// }

// function checkMessage(value) {
//   if (value.length > LIMITS.message) return `Please keep your message under ${LIMITS.message} characters.`;
//   const links = value.match(LINK)?.length ?? 0;
//   if (links > LIMITS.maxLinks) return 'Please remove some of the links from your message.';
//   return null;
// }

// /**
//  * Validates one submission against a form config from src/data.
//  * Only fields defined in the config are read; anything else is ignored.
//  * @returns {{ values: Record<string,string>, errors: Record<string,string> }}
//  */
// export function validateEnquiry(form, raw) {
//   const input = raw && typeof raw === 'object' ? raw : {};
//   const values = {};
//   const errors = {};

//   for (const field of form.fields) {
//     const value = clean(input[field.name]);
//     values[field.name] = value;
//     // reset the regex state (global flag) before each test
//     LINK.lastIndex = 0;
//     const error = checkField(field, value);
//     if (error) errors[field.name] = error;
//   }

//   const message = clean(input.message, { multiline: true });
//   values.message = message;
//   LINK.lastIndex = 0;
//   const messageError = checkMessage(message);
//   if (messageError) errors.message = messageError;

//   return { values, errors };
// }

// Enquiry form validation. The SAME rules run in the browser (instant feedback)
// and on the server (the real check — browser checks can always be bypassed).
// No Node-only or browser-only code in this file, so both sides can import it.

export const LIMITS = {
  name: 80,
  email: 254,
  phone: 20,
  text: 120,
  message: 2000,
  maxLinks: 2, // links allowed in the message (spam usually has many)
};

// Control characters (except tab/newline) are never legitimate in a form field
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u2028\u2029\uFEFF]/g;
const EMAIL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const PERSON_NAME = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
const PHONE = /^\+?[0-9 ().-]+$/;
const LINK = /(https?:\/\/|www\.)/gi;

// Trim, remove control characters and collapse spaces. Messages keep their line breaks.
export function clean(value, { multiline = false } = {}) {
  if (typeof value !== 'string') return '';
  let v = value.replace(CONTROL_CHARS, '');
  v = multiline ? v.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n') : v.replace(/\s+/g, ' ');
  return v.trim();
}

// What kind of check a field needs, worked out from its config
function kindOf(field) {
  if (field.options) return 'select';
  if (field.type === 'email') return 'email';
  if (field.type === 'tel') return 'phone';
  if (field.name === 'name') return 'name';
  return 'text';
}

export function maxLengthOf(field) {
  return LIMITS[kindOf(field)] ?? LIMITS.text;
}

function checkField(field, value) {
  const label = field.label.toLowerCase();
  const kind = kindOf(field);

  if (!value) {
    if (!field.required) return null;
    return kind === 'select' ? `Please choose ${label}.` : `Please enter your ${label}.`;
  }
  if (value.length > maxLengthOf(field)) return `Please keep this under ${maxLengthOf(field)} characters.`;

  switch (kind) {
    case 'select':
      return field.options.includes(value) ? null : 'Please choose one of the options.';
    case 'email':
      return EMAIL.test(value) ? null : 'Please enter a valid email address, like name@example.com.';
    case 'phone': {
      // Indian mobile: 10 digits starting 6–9, optionally written with +91, 91 or 0 in front.
      // International numbers starting with + (8–15 digits) are also accepted.
      if (!PHONE.test(value)) return 'Please enter a valid phone number.';
      const digits = value.replace(/\D/g, '');
      const local = digits.replace(/^(?:91|0)(?=\d{10}$)/, '');
      if (/^[6-9]\d{9}$/.test(local)) return null;
      if (value.startsWith('+') && !value.startsWith('+91') && digits.length >= 8 && digits.length <= 15) return null;
      return 'Please enter a valid 10-digit mobile number.';
    }
    case 'name':
      return value.length >= 2 && PERSON_NAME.test(value) ? null : 'Please enter your name using letters only.';
    default:
      return LINK.test(value) ? 'Please remove links from this field.' : null;
  }
}

function checkMessage(value) {
  if (value.length > LIMITS.message) return `Please keep your message under ${LIMITS.message} characters.`;
  const links = value.match(LINK)?.length ?? 0;
  if (links > LIMITS.maxLinks) return 'Please remove some of the links from your message.';
  return null;
}

/**
 * Validates one submission against a form config from src/data.
 * Only fields defined in the config are read; anything else is ignored.
 * @returns {{ values: Record<string,string>, errors: Record<string,string> }}
 */
export function validateEnquiry(form, raw) {
  const input = raw && typeof raw === 'object' ? raw : {};
  const values = {};
  const errors = {};

  for (const field of form.fields) {
    const value = clean(input[field.name]);
    values[field.name] = value;
    // reset the regex state (global flag) before each test
    LINK.lastIndex = 0;
    const error = checkField(field, value);
    if (error) errors[field.name] = error;
  }

  const message = clean(input.message, { multiline: true });
  values.message = message;
  LINK.lastIndex = 0;
  const messageError = checkMessage(message);
  if (messageError) errors.message = messageError;

  return { values, errors };
}
