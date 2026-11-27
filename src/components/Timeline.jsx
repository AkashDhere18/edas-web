// "From land to lived-in" route map (The EDAS Promise page). First half = Design, second half = Build.
export default function Timeline({ stops }) {
  const half = stops.length / 2;
  return (
    <div className="route">
      <div className="route-phases">
        <span style={{ gridColumn: `1/${half + 1}` }}>Design</span>
        <span style={{ gridColumn: `${half + 1}/${stops.length + 1}` }}>Build</span>
      </div>
      <div className="route-track">
        <svg viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M50 30 C100 30 100 70 150 70 S200 30 250 30 S300 70 350 70 S400 30 450 30 S500 70 550 70 S600 30 650 30 S700 70 750 70" />
        </svg>
        <ol>
          {stops.map((s, i) => (
            <li key={s.title}>
              <span className="pin"><i>{i + 1}</i></span>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="ends">
        <span>Your plot</span>
        <span>Your villa</span>
      </div>
    </div>
  );
}
