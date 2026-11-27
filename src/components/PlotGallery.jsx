'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

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

// Design library (The EDAS Promise page): one card per plot, each with several style options.
// Filter by style, switch styles on a card, or open a plot in the full-screen viewer.
// Links like /the-edas-promise?plot=24&style=mediterranean open that plot directly.
export default function PlotGallery({ plots }) {
  const list = useMemo(
    () => plots.filter((p) => p.options?.length).sort((a, b) => Number(a.plot) - Number(b.plot)),
    [plots],
  );
  const styles = useMemo(() => {
    const count = new Map();
    list.forEach((p) => new Set(p.options.map((o) => o.style)).forEach((st) => count.set(st, (count.get(st) || 0) + 1)));
    return [...count];
  }, [list]);

  const [filter, setFilter] = useState('All');
  const [picked, setPicked] = useState({}); // plot number → chosen option on its card
  const [viewer, setViewer] = useState(null); // { plot, index } while the viewer is open
  const dialogRef = useRef(null);
  const swipeX = useRef(null);

  const shown = filter === 'All' ? list : list.filter((p) => p.options.some((o) => o.style === filter));
  const cardIndex = (p) => (filter === 'All' ? picked[p.plot] ?? 0 : p.options.findIndex((o) => o.style === filter));

  const current = viewer && list.find((p) => p.plot === viewer.plot);
  const option = current?.options[viewer.index];

  // Open a plot from a shared link (?plot=24&style=mediterranean)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = list.find((x) => x.plot === q.get('plot'));
    if (!p) return;
    const index = Math.max(0, p.options.findIndex((o) => slug(o.label || o.style) === q.get('style')));
    const id = requestAnimationFrame(() => {
      setViewer({ plot: p.plot, index });
      document.getElementById('design-library')?.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [list]);

  // Keep the dialog and the address bar in step with the viewer
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (viewer && !dialog.open) dialog.showModal();
    if (!viewer && dialog.open) dialog.close();

    const url = new URL(window.location.href);
    if (viewer && current) {
      url.searchParams.set('plot', current.plot);
      url.searchParams.set('style', slug(current.options[viewer.index].label || current.options[viewer.index].style));
    } else {
      url.searchParams.delete('plot');
      url.searchParams.delete('style');
    }
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, '', url);
  }, [viewer, current]);

  const show = (plot, index) => {
    setViewer({ plot, index });
    setPicked((p) => ({ ...p, [plot]: index }));
  };
  const step = (d) => {
    if (!current) return;
    show(current.plot, (viewer.index + d + current.options.length) % current.options.length);
  };
  const close = () => dialogRef.current?.close();

  // "Request a vision book" from the viewer: fill in the plot and style on the form below
  const requestBook = () => {
    const loc = document.getElementById('v-loc');
    if (loc && !loc.value) loc.value = `Veda Monteza, Plot ${current.plot}`;
    const style = document.getElementById('v-style');
    if (style && [...style.options].some((o) => o.value === option.style)) style.value = option.style;
    close();
  };

  return (
    <div className="plot-gallery">
      {styles.length > 1 && (
        <div className="plot-filters" role="group" aria-label="Filter by style">
          {[['All', list.length], ...styles].map(([name, n]) => (
            <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>
              {name === 'All' ? 'All plots' : name} <span>{n}</span>
            </button>
          ))}
        </div>
      )}

      <div className="plot-grid" key={filter}>
        {shown.map((p) => {
          const i = cardIndex(p);
          const o = p.options[i];
          const many = p.options.length > 1;
          return (
            <article className="plot-card" key={p.plot}>
              <button type="button" className="plot-media" onClick={() => show(p.plot, i)} aria-label={`Open Plot ${p.plot} designs`}>
                <img key={o.image} src={o.thumb || o.image} alt={`Plot ${p.plot}, ${o.style} villa design`} loading="lazy" />
                <span className="plot-no">
                  Plot <b>{p.plot}</b>
                </span>
                <span className="plot-count">
                  <ExpandIcon /> {many ? `${p.options.length} designs` : 'View'}
                </span>
              </button>
              <div className="plot-body">
                <div className="plot-meta">
                  <b>{o.label || o.style}</b>
                  {(p.size || p.format) && <span>{[p.format, p.size].filter(Boolean).join(' · ')}</span>}
                </div>
                {many && (
                  <div className="plot-styles" role="group" aria-label={`Design options for Plot ${p.plot}`}>
                    {p.options.map((opt, k) => (
                      <button
                        key={`${opt.style}-${k}`}
                        type="button"
                        aria-pressed={k === i}
                        onClick={() => {
                          setFilter('All');
                          setPicked((s) => ({ ...s, [p.plot]: k }));
                        }}
                      >
                        {opt.label || opt.style}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="pv"
        aria-labelledby="pv-title"
        onClose={() => setViewer(null)}
        onClick={(e) => { if (e.target === dialogRef.current) close(); }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {current && option && (
          <div className="pv-inner">
            <header className="pv-top">
              <div>
                <p className="pv-kicker">Design library</p>
                <h3 id="pv-title">
                  Plot {current.plot} <span>· {option.label || option.style}</span>
                </h3>
              </div>
              <div className="pv-actions">
                {current.options.length > 1 && (
                  <span className="pv-count">
                    {viewer.index + 1} / {current.options.length}
                  </span>
                )}
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
              <img key={option.image} src={option.image} alt={`Plot ${current.plot}, ${option.style} villa design`} draggable="false" />
              {current.options.length > 1 && (
                <>
                  <button type="button" className="pv-nav prev" onClick={() => step(-1)} aria-label="Previous design">
                    <ChevronLeftIcon />
                  </button>
                  <button type="button" className="pv-nav next" onClick={() => step(1)} aria-label="Next design">
                    <ChevronRightIcon />
                  </button>
                </>
              )}
            </div>

            <footer className="pv-bottom">
              {current.options.length > 1 ? (
                <div className="pv-thumbs" role="group" aria-label="Designs for this plot">
                  {current.options.map((o, k) => (
                    <button key={`${o.style}-${k}`} type="button" aria-current={k === viewer.index} onClick={() => show(current.plot, k)}>
                      <img src={o.thumb || o.image} alt="" />
                      <span>{o.label || o.style}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <span />
              )}
              <a className="btn btn-white" href="#vision-book" onClick={requestBook}>
                Request a vision book for Plot {current.plot}
              </a>
            </footer>
          </div>
        )}
      </dialog>
    </div>
  );
}
