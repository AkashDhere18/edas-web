import Link from 'next/link';
import { FOOTER, SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="top">
          <div className="stack" style={{ gap: '16px' }}>
            <span className="logo-plate">
              <img src={SITE.logo.src} alt={SITE.logo.alt} width={SITE.logo.width} height={SITE.logo.height} />
            </span>
            <p style={{ maxWidth: '38ch' }}>{FOOTER.blurb}</p>
            <p className="lines">
              {FOOTER.lines[0]}
              <br />
              {FOOTER.lines[1]}
            </p>
          </div>
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Reach us</h4>
            <ul>
              {FOOTER.addresses.map((a) => (
                <li key={a}>{a}</li>
              ))}
              <li><span className="copyable">{SITE.email}</span></li>
              <li><span className="copyable">{SITE.phone}</span></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          {FOOTER.legal.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
