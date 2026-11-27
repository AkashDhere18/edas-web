import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { FoundersGrid, TeamMarquee  } from '@/components/LeadershipGrid';
import ClientsMarquee from '@/components/ClientsMarquee';
import OfficeList from '@/components/OfficeList';
import { ABOUT_HERO, ABOUT_OFFICES, FOUNDERS, STORY, TEAM } from '@/data/about';
import { brandText } from '@/lib/brandText';

export const metadata = {
  title: 'About EDAS Group',
  description: 'The founders, team and offices of EDAS Group.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...ABOUT_HERO} />

      <section className="section">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">{STORY.label}</span>
            <h2>{STORY.title}</h2>
          </div>
          <div className="stack">
            <p className="lede">{brandText(STORY.lede)}</p>
            <p className="muted">{brandText(STORY.text)}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Leadership" title="The founders" />
          <FoundersGrid founders={FOUNDERS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Our team" title="The people behind the work" />
          {/* <TeamGrid team={TEAM} /> */}
          <TeamMarquee team={TEAM} />
        </div>
      </section>

      <ClientsMarquee label="Trusted by" />

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Offices" title="Where to find us" />
          <OfficeList offices={ABOUT_OFFICES} />
        </div>
      </section>
    </>
  );
}
