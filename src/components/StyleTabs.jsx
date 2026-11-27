'use client';

import { useRef, useState } from 'react';
import { VILLA_STYLES } from '@/data/promise';

// Image card: exterior on the front, interior on the back. Tapping it flips between them.
function FlipImage({ name, exterior, interior, flipped, onToggle }) {
  return (
    <button
      type="button"
      className={'flip' + (flipped ? ' is-flipped' : '')}
      onClick={onToggle}
      aria-label={`${name}: showing ${flipped ? 'interior' : 'exterior'}. Tap to see the ${flipped ? 'exterior' : 'interior'}.`}
    >
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <img src={exterior} alt={`${name} villa, exterior`} loading="lazy" />
        </span>
        <span className="flip-face flip-back">
          <img src={interior} alt={`${name} villa, interior`} loading="lazy" />
        </span>
      </span>
      <span className="flip-hint" aria-hidden="true">
        {flipped ? 'Interior' : 'Exterior'} · Tap to see {flipped ? 'exterior' : 'interior'}
      </span>
    </button>
  );
}

// Text on the right: changes with the view (exterior / interior)
function StyleCopy({ number, name, view, data }) {
  return (
    // key restarts the fade-in each time the view or style changes
    <div className="style-copy" key={`${name}-${view}`}>
      <p className="tagline" style={{ font: '700 1.2rem/1.3 var(--f-head)' }}>
        <span className="style-num">{number}</span>
        {name}
      </p>
      <p className="keywords">{data.keywords.join('  |  ')}</p>
      <p className="muted">{data.description}</p>

      <span className="note">Colour palette</span>
      <ul className="tones" aria-label="Colour palette">
        {data.colors.map((c) => (
          <li key={c} style={{ background: c }} title={c}></li>
        ))}
      </ul>

      {data.materials && (
        <>
          <span className="note">Materials</span>
          <ul className="swatches">
            {data.materials.map((m) => (
              <li key={m} style={{ paddingLeft: '11px' }}>{m}</li>
            ))}
          </ul>
        </>
      )}

      {data.feel && (
        <ul className="feel" aria-label="The feel">
          {data.feel.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// "Choose your style" tabs (The EDAS Promise page). Content lives in src/data/promise.js.
export default function StyleTabs() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState('exterior'); // 'exterior' | 'interior'
  const tabRefs = useRef([]);

  // choosing a style always starts on the exterior
  const choose = (i) => {
    setSelected(i);
    setView('exterior');
  };

  const onKeyDown = (e, i) => {
    const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + VILLA_STYLES.length) % VILLA_STYLES.length;
    choose(n);
    tabRefs.current[n]?.focus();
  };

  const s = VILLA_STYLES[selected];
  const number = String(selected + 1).padStart(2, '0');

  return (
    <div data-tabs="">
      <div className="picker" role="tablist" aria-label="Architectural style">
        {VILLA_STYLES.map((style, i) => (
          <button
            key={style.key}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`o-${style.key}`}
            aria-controls={`op-${style.key}`}
            aria-selected={i === selected ? 'true' : 'false'}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => choose(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <img src={style.exterior.image} alt="" />
            <span>
              <b>{style.name}</b>
              <span>{style.exterior.keywords.join(' · ')}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="option" role="tabpanel" id={`op-${s.key}`} aria-labelledby={`o-${s.key}`}>
        <FlipImage
          key={s.key}
          name={s.name}
          exterior={s.exterior.image}
          interior={s.interior.image}
          flipped={view === 'interior'}
          onToggle={() => setView((v) => (v === 'exterior' ? 'interior' : 'exterior'))}
        />
        <div className="stack" style={{ gap: '12px' }}>
          <div className="view-switch" role="group" aria-label="View">
            <button type="button" aria-pressed={view === 'exterior'} onClick={() => setView('exterior')}>Exterior</button>
            <button type="button" aria-pressed={view === 'interior'} onClick={() => setView('interior')}>Interior</button>
          </div>
          <StyleCopy number={number} name={s.name} view={view} data={s[view]} />
        </div>
      </div>
    </div>
  );
}