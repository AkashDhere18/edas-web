import { brandText } from '@/lib/brandText';
import { CAPABILITY_ICONS } from './Icons';

// "What we build" cards (Turnkey Solutions page): photo on top, icon badge on its edge, text below.
// Content lives in CAPABILITIES in src/data/turnkey.js.
export default function CapabilityCards({ items }) {
  return (
    <div className="capx-grid">
      {items.map((c, i) => (
        <article className="capx" key={c.title}>
          <div className="capx-media">
            {c.image && <img src={c.image} alt="" loading="lazy" />}
            <span className="capx-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="capx-body">
            <span className="capx-icon">{CAPABILITY_ICONS[c.icon]}</span>
            <h3>{c.title}</h3>
            <p>{brandText(c.text)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}