// import { brandText } from '@/lib/brandText';
// import { CAPABILITY_ICONS } from './Icons';

// // "What we build" cards (Turnkey Solutions page)
// export default function CapabilityCards({ items }) {
//   return (
//     <div className="grid-3">
//       {items.map((c) => (
//         <div className="card cap" key={c.title}>
//           <span className="ico">{CAPABILITY_ICONS[c.icon]}</span>
//           <h3>{c.title}</h3>
//           <p>{brandText(c.text)}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { brandText } from '@/lib/brandText';
import { CAPABILITY_ICONS } from './Icons';

// "What we build" cards (Turnkey Solutions page)
export default function CapabilityCards({ items }) {
  return (
    <div className="grid-3 cap-grid">
      {items.map((c, i) => (
        <div className="cap-card" key={c.title}>
          <span className="cap-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <span className="cap-icon">{CAPABILITY_ICONS[c.icon]}</span>
          <h3>{c.title}</h3>
          <p>{brandText(c.text)}</p>
        </div>
      ))}
    </div>
  );
}
