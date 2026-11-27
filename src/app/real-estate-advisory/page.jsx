import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import ServiceCards from '@/components/ServiceCards';
import Steps from '@/components/Steps';
import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';
import {
  ADVISORY_CONTACT,
  ADVISORY_FORM,
  ADVISORY_HERO,
  ADVISORY_STEPS,
  CASES,
  MORE_CASES,
  PRACTICES,
  REPORT_PAGES,
} from '@/data/advisory';
import { brandText } from '@/lib/brandText';

export const metadata = {
  title: 'EDAS Asset Advisors',
  description: 'Land diligence, development management, capital advisory and lender support for Indian real estate.',
};

function CaseList({ items }) {
  return (
    <div className="cases">
      {items.map((c) => (
        <div className="case" key={c.title}>
          <span className="k">{c.kind}</span>
          <h3>{c.title}</h3>
          <p>{brandText(c.text)}</p>
        </div>
      ))}
    </div>
  );
}

export default function AdvisoryPage() {
  return (
    <>
      <PageHero {...ADVISORY_HERO} />

      <section className="section">
        <div className="wrap">
          <SectionHead label="What we do" title="Four practices. One integrated team.">
            <p className="muted" style={{ maxWidth: '44ch' }}>Engage one practice for a specific need, or combine them into a single mandate.</p>
          </SectionHead>
          <ServiceCards items={PRACTICES} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="How we work" title="Four steps, agreed up front." />
          <Steps items={ADVISORY_STEPS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <figure style={{ margin: '0' }} className="stack">
            <div className="report-stack" aria-hidden="true">
              {REPORT_PAGES.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
              <span className="stamp">Client details masked</span>
            </div>
            <figcaption className="note" style={{ textAlign: 'center' }}>
              From an EDAS due diligence report: cover, risk register and plot survey.
            </figcaption>
          </figure>
          <div className="stack">
            <span className="label">Selected assignments</span>
            <h2>Recent work</h2>
            <p className="muted">A few examples from our current work. Client names are withheld.</p>
            <CaseList items={CASES} />
            <details className="more-cases">
              <summary>More assignments</summary>
              <CaseList items={MORE_CASES} />
            </details>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">Talk to us</span>
            <h2>Discuss a mandate</h2>
            <p className="muted">Tell us about the asset and the decision ahead. A founder will reply.</p>
            <ContactCard {...ADVISORY_CONTACT} />
          </div>
          <ContactForm {...ADVISORY_FORM} />
        </div>
      </section>
    </>
  );
}
