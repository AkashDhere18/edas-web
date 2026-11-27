import { CLIENTS } from '@/data/site';

// "Trusted by" strip with a scrolling logo marquee. The logo list is rendered twice so the CSS animation loops seamlessly.
export default function ClientsMarquee({ label }) {
  return (
    <section className="section tight">
      <div className="wrap">
        <p className="label plain" style={{ justifyContent: 'center', width: '100%', color: 'var(--ink-2)' }}>{label}</p>
        <div className="marquee" style={{ marginTop: '16px' }} aria-label="Clients">
          <div className="marquee-track">
            <ul className="marquee-list">
              {CLIENTS.map((c) => (
                <li className="logo-tile" key={c.src}>
                  <img src={c.src} alt={c.name} loading="lazy" />
                </li>
              ))}
            </ul>
            <ul className="marquee-list" aria-hidden="true">
              {CLIENTS.map((c) => (
                <li className="logo-tile" key={c.src}>
                  <img src={c.src} alt="" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
