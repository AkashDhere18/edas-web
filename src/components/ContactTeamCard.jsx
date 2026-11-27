import CopyButton from './CopyButton';

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

// "Let's talk" cards on the Contact page: minimal card with a thin accent line, initials, and
// tappable email/phone. Content lives in CONTACT_PEOPLE in src/data/contact.js.
export default function ContactTeamCard({ entity, name, email, phone }) {
  const tel = phone ? phone.replace(/[^\d+]/g, '') : '';
  return (
    <article className="card ccard ct-card">
      <span className="ct-entity">{entity}</span>
      <div className="ct-name">
        <span className="ct-avatar" aria-hidden="true">{initials(name)}</span>
        <b>{name}</b>
      </div>
      <div className="row">
        <a className="copyable ct-link" href={`mailto:${email}`}>{email}</a>
        <CopyButton text={email} />
      </div>
      {phone && (
        <div className="row">
          <a className="copyable ct-link" href={`tel:${tel}`}>{phone}</a>
        </div>
      )}
    </article>
  );
}