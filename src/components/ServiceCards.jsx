// // The four advisory practices (Real Estate Advisory page)
// export default function ServiceCards({ items }) {
//   return (
//     <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))' }}>
//       {items.map((p) => (
//         <div className="card practice core" key={p.title}>
//           <span className="line">{p.line}</span>
//           <h3>{p.title}</h3>
//           <ul>
//             {p.items.map((t) => (
//               <li key={t}>{t}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// The four advisory practices (Real Estate Advisory page): navy header band with an S-curve
// gold/orange ribbon flowing into the card body. Content lives in PRACTICES in src/data/advisory.js.

const svg = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };

// One icon per practice, in the same order as PRACTICES
const ICONS = [
  // land & feasibility: map with pin
  <svg key="land" {...svg}><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></svg>,
  // development management: building under construction
  <svg key="dev" {...svg}><path d="M3 21h18M6 21V8l6-4 6 4v13" /><path d="M10 21v-5h4v5M9 11h.01M15 11h.01" /></svg>,
  // capital & financial: rising chart
  <svg key="cap" {...svg}><path d="M3 20h18" /><path d="M5 16l5-5 4 3 6-7" /><path d="M15 7h5v5" /></svg>,
  // lender & special situations: shield with check
  <svg key="lender" {...svg}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>,
];

function Wave({ id }) {
  return (
    <svg className="svc-wave" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`svc-gold-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#E8C27A" />
          <stop offset=".55" stopColor="#B8641F" />
          <stop offset="1" stopColor="#E8C27A" />
        </linearGradient>
      </defs>
      {/* navy S-curve: the bottom edge of the header band */}
      <path className="svc-wave-navy" d="M0 0H400V22C330 58 270 4 200 30S70 62 0 26Z" />
      {/* gold ribbon following the same S-curve */}
      <path d="M0 26C70 62 130 4 200 30S330 58 400 22" fill="none" stroke={`url(#svc-gold-${id})`} strokeWidth="3" />
      {/* thin orange line, offset below */}
      <path d="M0 36C70 70 130 14 200 40S330 66 400 32" fill="none" stroke="#B8641F" strokeOpacity=".35" strokeWidth="1.2" />
    </svg>
  );
}

export default function ServiceCards({ items }) {
  return (
    <div className="svc-grid">
      {items.map((p, i) => (
        <article className="svc-card" key={p.title}>
          <header className="svc-head">
            <div className="svc-top">
              <span className="svc-icon">{ICONS[i % ICONS.length]}</span>
              <span className="svc-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <span className="svc-line">{p.line}</span>
            <h3>{p.title}</h3>
          </header>
          <Wave id={i} />
          <ul className="svc-list">
            {p.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
