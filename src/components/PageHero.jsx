import { brandText } from '@/lib/brandText';

// Photo banner at the top of inner pages
export default function PageHero({ image, objectPosition, label, title, text }) {
  return (
    <section className="banner">
      <img src={image} alt="" fetchPriority="high" style={{ objectPosition }} />
      <div className="wrap">
        <span className="label">{label}</span>
        <h1>{title}</h1>
        <p>{brandText(text)}</p>
      </div>
    </section>
  );
}
