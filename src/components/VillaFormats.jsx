// "Villa formats" cards (The EDAS Promise page): villa cut-out on a soft golden stage, gold details.
// Content lives in VILLA_FORMATS in src/data/promise.js.
export default function VillaFormats({ formats }) {
  return (
    <div className="fmt-grid">
      {formats.map((f) => (
        <article className="fmt-card" key={f.name}>
          <div className="fmt-stage">
            <img src={f.image} alt={`${f.name} villa design`} loading="lazy" />
          </div>
          <div className="fmt-body">
            <span className="fmt-code">{f.code}</span>
            <h4>{f.name}</h4>
            <p className="fmt-text">{f.text}</p>
            <dl className="fmt-specs">
              {f.specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}