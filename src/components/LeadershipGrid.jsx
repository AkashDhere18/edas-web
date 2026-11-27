import { brandText } from '@/lib/brandText';

// Founders (large cards) and team (small photo grid) on the About page
export function FoundersGrid({ founders }) {
  return (
    <div className="founders">
      {founders.map((f) => (
        <div className="founder" key={f.name}>
          <div className="photo">
            <img src={f.photo} alt={f.name} loading="lazy" />
          </div>
          <h3>{f.name}</h3>
          <span className="role">{f.role}</span>
          <p className="leads">{brandText(f.leads)}</p>
          <p>{f.bio}</p>
        </div>
      ))}
    </div>
  );
}

// export function TeamGrid({ team }) {
//   return (
//     <div className="team">
//       {team.map((m) => (
//         <div className="member" key={m.name}>
//           <div className="photo">
//             <img src={m.photo} alt={m.name} loading="lazy" />
//           </div>
//           <b>{m.name}</b>
//           <span>{m.role}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// Team photos as a slowly scrolling strip (same marquee as the client logos).
// The list is rendered twice so the animation loops seamlessly; the copy is hidden from screen readers.
export function TeamMarquee({ team }) {
  const list = (copy) =>
    team.map((m) => (
      <li className="member" key={m.name}>
        <div className="photo">
          <img src={m.photo} alt={copy ? '' : m.name} loading="lazy" />
        </div>
        <b>{m.name}</b>
        <span>{m.role}</span>
      </li>
    ));

  return (
    <div className="marquee team-marquee" aria-label="Our team">
      <div className="marquee-track">
        <ul className="marquee-list">{list(false)}</ul>
        <ul className="marquee-list" aria-hidden="true">{list(true)}</ul>
      </div>
    </div>
  );
}

export default FoundersGrid;
