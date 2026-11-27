import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import CapabilityCards from '@/components/CapabilityCards';
import Steps from '@/components/Steps';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';
import { CAPABILITIES, PROJECTS, TURNKEY_CONTACT, TURNKEY_FORM, TURNKEY_HERO, TURNKEY_PROMISE, TURNKEY_STEPS } from '@/data/turnkey';

export const metadata = {
  title: 'EDAS Projects',
  description: 'Turnkey construction for villas, residential, hospitality and commercial buildings.',
};

export default function TurnkeyPage() {
  return (
    <>
      <PageHero {...TURNKEY_HERO} />

      <section className="section">
        <div className="wrap">
          <SectionHead label="What we build" title="Capabilities" />
          <CapabilityCards items={CAPABILITIES} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="How we build" title="Drawn, checked, then built." />
          <Steps items={TURNKEY_STEPS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <div className="feature-img">
            <img src={TURNKEY_PROMISE.image} alt={TURNKEY_PROMISE.alt} loading="lazy" />
          </div>
          <div className="stack">
            <span className="label">{TURNKEY_PROMISE.label}</span>
            <h2>{TURNKEY_PROMISE.title}</h2>
            <p className="lede">{TURNKEY_PROMISE.text}</p>
            <div>
              <Link className="btn btn-primary" href={TURNKEY_PROMISE.cta.href}>{TURNKEY_PROMISE.cta.label}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Projects" title="Selected projects" />
          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,250px),1fr))' }}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">Talk to us</span>
            <h2>Plan a project</h2>
            <p className="muted">Share a few details and we will arrange a site visit.</p>
            <ContactCard {...TURNKEY_CONTACT} />
          </div>
          <ContactForm {...TURNKEY_FORM} />
        </div>
      </section>
    </>
  );
}
