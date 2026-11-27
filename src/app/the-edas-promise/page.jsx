import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import CompareSlider from '@/components/CompareSlider';
import StyleTabs from '@/components/StyleTabs';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import VillaFormats from '@/components/VillaFormats';
import PlotGallery from '@/components/PlotGallery';
import { PLOT_DESIGNS, JOURNEY, PROMISE_FORM, PROMISE_HERO, PROMISE_POINTS, VILLA_FORMATS } from '@/data/promise';
import { brandText } from '@/lib/brandText';

export const metadata = {
  title: 'The EDAS Promise',
  description: 'Your plot, your villa, one complete journey: design, approvals and construction by EDAS.',
};

export default function PromisePage() {
  return (
    <>
      <PageHero {...PROMISE_HERO} />

      <section className="section">
        <div className="wrap grid-3">
          {PROMISE_POINTS.map((p) => (
            <div className="stack" style={{ gap: '8px' }} key={p.title}>
              <span className="label plain">{p.label}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="From drawing to home" title="Every villa starts as a precise drawing.">
            <p className="muted" style={{ maxWidth: '40ch' }}>Drag the handle to compare the CAD drawing with the finished design.</p>
          </SectionHead>
          <CompareSlider />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Choose your style" title="Choose your architectural style.">
            <p className="muted" style={{ maxWidth: '40ch' }}>Pick a style to see the villa, its materials and its colour palettes.</p>
          </SectionHead>
          <StyleTabs />
        </div>
      </section>

      {/* <section className="section alt">
        <div className="wrap">
          <SectionHead label="Design library" title="Every plot, its own design.">
            <p className="muted" style={{ maxWidth: '42ch' }}>Designs and material palettes prepared for individual plots at Veda Monteza.</p>
          </SectionHead>
          <div className="library">
            {DESIGN_LIBRARY.map((d) => (
              <figure key={d.image}>
                <img src={d.image} alt={d.alt} loading="lazy" />
                <figcaption>{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section> */}
      <section className="section alt" id="design-library">
        <div className="wrap">
          <SectionHead label="Design library" title="Every plot, its own design.">
            <p className="muted" style={{ maxWidth: '42ch' }}>Each plot at Veda Monteza comes with design options in different styles. Choose a style, or open a plot to compare its designs.</p>
          </SectionHead>
          <PlotGallery plots={PLOT_DESIGNS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Villa formats" title="Sized for your plot." />
          <VillaFormats formats={VILLA_FORMATS} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="The journey" title="From land to lived-in.">
            <p className="muted" style={{ maxWidth: '40ch' }}>Eight stops from your plot to your villa, with one team at every step.</p>
            <div style={{ display: 'none' }}></div>
          </SectionHead>
          <Timeline stops={JOURNEY} />
          <p className="callout" style={{ marginTop: '28px' }}>
            <b>Simple, milestone-linked payments.</b> You pay in stages as work progresses on site. The detailed schedule comes with your proposal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <div className="feature-img">
            <img src="/images/veda-monteza-layout.webp" alt="Veda Monteza plotted layout, artist’s impression" loading="lazy" />
          </div>
          <div className="stack">
            <span className="label">First programme</span>
            <h2>Veda Monteza, Mapgaon, Alibaug</h2>
            <span className="tag land">Land stage</span>
            <p className="muted">
              {brandText(
                'Concept designs are ready for every plot, so buyers can see their future home before they build it with **EDAS**. The **EDAS Promise** will extend to more developments and individual plot owners.',
              )}
            </p>
            <p className="note">Layout: artist’s impression, courtesy Veda Life Spaces.</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="vision-book">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">Get started</span>
            <h2>Request a vision book for your plot</h2>
            <p className="muted">A short illustrated book with your plot in context, indicative plans and three design options.</p>
          </div>
          <ContactForm {...PROMISE_FORM} />
        </div>
        <div className="wrap">
          <p className="note" style={{ marginTop: '28px' }}>
            Concept images and indicative plans are for design discussion only. Plot dimensions, setbacks, costs, specifications and statutory compliance must be verified by appointed professionals and relevant authorities.
          </p>
        </div>
      </section>
    </>
  );
}
