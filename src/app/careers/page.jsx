import PageHero from '@/components/PageHero';
import ContactCard from '@/components/ContactCard';
import { CAREERS_HERO, CV_CARD, DISCIPLINES, PERKS } from '@/data/careers';

export const metadata = {
  title: 'Careers at EDAS',
  description: 'Careers at EDAS Group.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero {...CAREERS_HERO} />

      <section className="section">
        <div className="wrap grid-3">
          {PERKS.map((p) => (
            <div className="stack" style={{ gap: '8px' }} key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">Disciplines</span>
            <h2>Tell us where you fit</h2>
            <p className="muted">We hire as projects grow. Send your CV and we will keep it on file for the next opening.</p>
            <ul className="chips">
              {DISCIPLINES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <ContactCard {...CV_CARD} />
        </div>
      </section>
    </>
  );
}
