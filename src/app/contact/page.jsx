import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';
import OfficeList from '@/components/OfficeList';
import ContactTeamCard from '@/components/ContactTeamCard';
import { CONTACT_FORM, CONTACT_OFFICES, CONTACT_PEOPLE } from '@/data/contact';

export const metadata = {
  title: 'Contact EDAS',
  description: 'Contact EDAS Asset Advisors or EDAS Projects.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="label">Contact Us</span>
          <h1>Let’s talk.</h1>
          <p className="lede">Choose the right team below, or send a general message. We reply within one working day.</p>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap contact-cards">
          {CONTACT_PEOPLE.map((p) => (
            <ContactTeamCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="stack">
            <span className="label">Offices</span>
            <h2>Visit us</h2>
            <OfficeList offices={CONTACT_OFFICES} style={{ gridTemplateColumns: '1fr', marginTop: '8px' }} />
          </div>
          <ContactForm {...CONTACT_FORM} />
        </div>
      </section>
    </>
  );
}
