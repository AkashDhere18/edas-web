'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HERO_SLIDES } from '@/data/home';
import { brandText } from '@/lib/brandText';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const COUNT = HERO_SLIDES.length;
const INTERVAL = 6500;

// Home page hero: auto-advances every 6.5 s, pauses on hover/focus, no autoplay for reduced-motion users.
export default function HeroSlider() {
  // i = visible slide; seen = bitmask of slides already shown (their images switch from lazy to eager)
  const [state, setState] = useState({ i: 0, seen: 1 });
  const timer = useRef(null);
  const reduce = useRef(false);

  const go = useCallback((next) => {
    setState((s) => {
      const i = ((typeof next === 'function' ? next(s.i) : next) + COUNT) % COUNT;
      return { i, seen: s.seen | (1 << i) };
    });
  }, []);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    if (reduce.current) return;
    stop();
    timer.current = setInterval(() => go((i) => i + 1), INTERVAL);
  }, [go, stop]);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    start();
    return stop;
  }, [start, stop]);

  const { i, seen } = state;

  return (
    <section
      className="carousel"
      data-carousel=""
      aria-roledescription="carousel"
      aria-label="EDAS at a glance"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      {HERO_SLIDES.map((s, k) => (
        <div
          key={s.image}
          className={'slide' + (k === i ? ' on' : '')}
          role="group"
          aria-roledescription="slide"
          aria-label={`${k + 1} of ${COUNT}`}
          aria-hidden={k === i ? 'false' : 'true'}
        >
          {k === 0 ? (
            <img src={s.image} alt="" fetchPriority="high" style={{ objectPosition: s.position }} />
          ) : (
            <img src={s.image} alt="" loading={seen & (1 << k) ? 'eager' : 'lazy'} style={{ objectPosition: s.position }} />
          )}
          <div className="wrap">
            <span className="label">{s.label}</span>
            {k === 0 ? <h1>{s.title}</h1> : <p className="h1">{s.title}</p>}
            <p>{brandText(s.text)}</p>
            <div className="hero-actions">
              {s.actions.map((a) => (
                <Link key={a.href} className={`btn ${a.style}`} href={a.href}>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button className="car-btn prev" type="button" aria-label="Previous slide" onClick={() => { go(i - 1); start(); }}>
        <ChevronLeftIcon />
      </button>
      <button className="car-btn next" type="button" aria-label="Next slide" onClick={() => { go(i + 1); start(); }}>
        <ChevronRightIcon />
      </button>
      <div className="car-dots">
        {HERO_SLIDES.map((s, k) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Slide ${k + 1}`}
            aria-current={k === i ? 'true' : undefined}
            onClick={() => { go(k); start(); }}
          />
        ))}
      </div>
    </section>
  );
}
