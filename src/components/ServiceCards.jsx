// The four advisory practices (Real Estate Advisory page)
export default function ServiceCards({ items }) {
  return (
    <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))' }}>
      {items.map((p) => (
        <div className="card practice core" key={p.title}>
          <span className="line">{p.line}</span>
          <h3>{p.title}</h3>
          <ul>
            {p.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
