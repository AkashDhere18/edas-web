import Link from 'next/link';

// Dark call-to-action strip
export default function CtaBand({ title, text, button }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="stack" style={{ gap: '6px' }}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-white" href={button.href}>{button.label}</Link>
      </div>
    </section>
  );
}
