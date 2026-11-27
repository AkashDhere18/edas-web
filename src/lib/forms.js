// All enquiry forms the API accepts, by id. The server only trusts these configs:
// a request can't add fields, change labels or choose where the email goes.
import { ADVISORY_FORM } from '@/data/advisory';
import { TURNKEY_FORM } from '@/data/turnkey';
import { PROMISE_FORM } from '@/data/promise';
import { CONTACT_FORM } from '@/data/contact';

export const FORMS = Object.fromEntries([ADVISORY_FORM, TURNKEY_FORM, PROMISE_FORM, CONTACT_FORM].map((f) => [f.id, f]));
