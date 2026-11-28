'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

// Tab order. Styles found in the data but not listed here are added at the end automatically.
const STYLE_ORDER = ['Mediterranean', 'Tropical', 'Luxury Contemporary', 'Modern European', 'Neo-Classical', 'Modern Contemporary'];
const ROWS = 2; // rows shown at first, and added by each "See more"

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

// Columns the grid currently shows (matches the CSS breakpoints below)
function useColumns() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const read = () => setCols(window.matchMedia('(max-width: 700px)').matches ? 2 : window.matchMedia('(max-width: 1000px)').matches ? 2 : 3);
    read();
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, []);
  return cols;
}

// Design library (The EDAS Promise page): every design, grouped by architectural style.
// Reads PLOT_DESIGNS from src/data/promise.js; plot numbers are not shown.
export default function DesignGallery({ plots }) {
  // flatten plots → one list of designs, ordered by style
  const { styles, byStyle, } = useMemo(() => {
    const map = new Map();
    plots.forEach((p) =>
      (p.options || []).forEach((o) => {
        if (!map.has(o.style)) map.set(o.style, []);
        map.get(o.style).push({ id: `${p.plot}-${slug(o.label || o.style)}`, style: o.style, image: o.image, thumb: o.thumb || o.image });
      }),
    );
    const order = [...STYLE_ORDER.filter((s) => map.has(s)), ...[...map.keys()].filter((s) => !STYLE_ORDER.includes(s))];
    // "All designs": take one design of each style in turn, so the grid mixes styles
    return { styles: order, byStyle: map };
  }, [plots]);

  const cols = useColumns();
  const [filter, setFilter] = useState(null);
  const [rows, setRows] = useState(ROWS);
  const [open, setOpen] = useState(null); // index in `list` while the viewer is open
  const dialogRef = useRef(null);
  const swipeX = useRef(null);

  // const list = filter === 'All' ? all : byStyle.get(filter) || [];
  const active = filter && byStyle.has(filter) ? filter : styles[0];
  const list = byStyle.get(active) || [];
  const shownCount = Math.min(list.length, rows * cols);
  const current = open !== null ? list[open] : null;

  const choose = (s) => {
    setFilter(s);
    setRows(ROWS);
  };

  // open the viewer as a modal dialog; keep it in step with state
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (current && !d.open) d.showModal();
    if (!current && d.open) d.close();
  }, [current]);

  const step = (dir) => setOpen((i) => (i + dir + list.length) % list.length);
  const close = () => dialogRef.current?.close();

  // "Request a vision book" in the viewer: pre-select the style on the form below
  const requestBook = () => {
    const style = document.getElementById('v-style');
    if (style && [...style.options].some((o) => o.value === current.style)) style.value = current.style;
    close();
  };

  return (
    <div className="dg">
      <div className="dg-tabs" role="tablist" aria-label="Architectural style">
        {styles.map((name) => (
          <button key={name} type="button" role="tab" aria-selected={active === name} onClick={() => choose(name)}>
            {name} <span>{byStyle.get(name).length}</span>
          </button>
        ))}
      </div>

      <div className="dg-grid" key={active} role="tabpanel">
        {list.slice(0, shownCount).map((d, i) => (
          <button
            key={d.id}
            type="button"
            className="dg-card"
            style={{ animationDelay: `${(i % (ROWS * cols)) * 50}ms` }}
            onClick={() => setOpen(i)}
            aria-label={`Open ${d.style} villa design`}
          >
            <img src={d.thumb} alt={`${d.style} villa design`} loading="lazy" />
            <span className="dg-style">{d.style}</span>
            <span className="dg-zoom" aria-hidden="true"><ExpandIcon /></span>
          </button>
        ))}
      </div>

      {shownCount < list.length && (
        <div className="dg-more">
          <button type="button" className="btn btn-outline" onClick={() => setRows((r) => r + ROWS)}>
            See more designs <span>({list.length - shownCount} more)</span>
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="pv"
        aria-labelledby="pv-title"
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === dialogRef.current) close(); }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {current && (
          <div className="pv-inner">
            <header className="pv-top">
              <div>
                <p className="pv-kicker">Design library</p>
                <h3 id="pv-title">{current.style}</h3>
              </div>
              <div className="pv-actions">
                <span className="pv-count">{open + 1} / {list.length}</span>
                <button type="button" className="pv-close" onClick={close} aria-label="Close">
                  <CloseIcon />
                </button>
              </div>
            </header>

            <div
              className="pv-stage"
              onPointerDown={(e) => { swipeX.current = e.clientX; }}
              onPointerUp={(e) => {
                if (swipeX.current === null) return;
                const dx = e.clientX - swipeX.current;
                swipeX.current = null;
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              }}
            >
              <img key={current.image} src={current.image} alt={`${current.style} villa design`} draggable="false" />
              {list.length > 1 && (
                <>
                  <button type="button" className="pv-nav prev" onClick={() => step(-1)} aria-label="Previous design"><ChevronLeftIcon /></button>
                  <button type="button" className="pv-nav next" onClick={() => step(1)} aria-label="Next design"><ChevronRightIcon /></button>
                </>
              )}
            </div>

            <footer className="pv-bottom">
              <div className="pv-thumbs" role="group" aria-label="Designs">
                {list.map((d, k) => (
                  <button
                    key={d.id}
                    type="button"
                    aria-current={k === open}
                    aria-label={`${d.style} design ${k + 1}`}
                    ref={(el) => { if (el && k === open) el.scrollIntoView({ block: 'nearest', inline: 'center' }); }}
                    onClick={() => setOpen(k)}
                  >
                    <img src={d.thumb} alt="" />
                  </button>
                ))}
              </div>
              <a className="btn btn-white" href="#vision-book" onClick={requestBook}>
                Request a vision book
              </a>
            </footer>
          </div>
        )}
      </dialog>
    </div>
  );
}
