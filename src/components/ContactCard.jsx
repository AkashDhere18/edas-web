import CopyButton from './CopyButton';

const ENTITY_STYLE = { fontSize: '.76rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 };

// Small card with a person or team, their email (with Copy button) and phone
export default function ContactCard({ entity, name, heading, note, email, phone }) {
  return (
    <div className="card ccard">
      {entity && <span className="entity" style={ENTITY_STYLE}>{entity}</span>}
      {name && <b>{name}</b>}
      {heading && <h3>{heading}</h3>}
      {note && <p className="muted">{note}</p>}
      <div className="row">
        <span className="copyable">{email}</span>
        <CopyButton text={email} />
      </div>
      {phone && (
        <div className="row">
          <span className="copyable">{phone}</span>
        </div>
      )}
    </div>
  );
}
