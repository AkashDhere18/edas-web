import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import SectionHead from '@/components/SectionHead';
import ProjectCard from '@/components/ProjectCard';
import ClientsMarquee from '@/components/ClientsMarquee';
import CtaBand from '@/components/CtaBand';
import { ArrowIcon } from '@/components/Icons';
import { BUSINESSES, CTA, FEATURED_PROJECTS, INTRO, PROMISE_TEASER } from '@/data/home';
import { SITE } from '@/data/site';
import { ROUTES } from '@/lib/routes';
import { brandText } from '@/lib/brandText';

export const metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Who we are */}
      <section className="section">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div className="stack">
            <span className="label">{INTRO.label}</span>
            <h2>{INTRO.title}</h2>
            <p className="lede">{brandText(INTRO.text)}</p>
          </div>
          <div className="choices" style={{ marginTop: '0', maxWidth: 'none' }}>
            {INTRO.choices.map((c) => (
              <Link className="choice" href={c.href} key={c.href}>
                <b>{c.title} <ArrowIcon /></b>
                <span>{c.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our businesses */}
      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Our businesses" title="Two businesses. One standard." />
          <div className="biz">
            {BUSINESSES.map((b) => (
              <Link className="card" href={b.href} key={b.href}>
                <div className="media">
                  <img src={b.image} alt={b.alt} loading="lazy" />
                </div>
                <div className="body">
                  <span className="entity">{b.entity}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <ul className="chips">
                    {b.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <span className="more">{b.more} <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The EDAS Promise */}
      <section className="section">
        <div className="wrap two">
          <div className="feature-img">
            <img src={PROMISE_TEASER.image} alt={PROMISE_TEASER.alt} loading="lazy" style={{ objectPosition: 'center 40%' }} />
          </div>
          <div className="stack">
            <span className="label">{PROMISE_TEASER.label}</span>
            <h2>{PROMISE_TEASER.title}</h2>
            <p className="lede">{brandText(PROMISE_TEASER.text)}</p>
            <ul className="ticks">
              {PROMISE_TEASER.ticks.map((t) => (
                <li key={t.strong}>
                  <span><b>{t.strong}</b>{t.text}</span>
                </li>
              ))}
            </ul>
            <p className="note">{PROMISE_TEASER.note}</p>
            <div>
              <Link className="btn btn-primary" href={PROMISE_TEASER.cta.href}>{PROMISE_TEASER.cta.label}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Projects" title="Selected projects">
            <Link className="more" href={ROUTES.turnkey}>More on construction <ArrowIcon /></Link>
          </SectionHead>
          <div className="grid-3">
            {FEATURED_PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee label="Trusted by developers and lenders" />

      <CtaBand {...CTA} />
    </>
  );
}
