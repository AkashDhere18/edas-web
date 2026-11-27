'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/data/site';
import { ROUTES } from '@/lib/routes';
import { ChevronDownIcon } from './Icons';
import ThemeToggle from './ThemeToggle';

const DESKTOP_HOVER = '(hover: hover) and (min-width: 861px)';

function Dropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const ddRef = useRef(null);
  const btnRef = useRef(null);
  const isCurrent = item.children.some((c) => c.href === pathname);

  // close the menu whenever the page changes
  if (openedOn !== pathname) {
    setOpenedOn(pathname);
    setOpen(false);
  }

  // close on any click outside the menu
  useEffect(() => {
    const onDocClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const hoverable = () => window.matchMedia(DESKTOP_HOVER).matches;

  return (
    <div
      ref={ddRef}
      className={'dd' + (isCurrent ? ' is-cur' : '') + (open ? ' open' : '')}
      onMouseEnter={() => { if (hoverable()) setOpen(true); }}
      onMouseLeave={() => { if (hoverable()) setOpen(false); }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          btnRef.current?.focus();
        }
      }}
    >
      <button
        ref={btnRef}
        type="button"
        className="dd-btn"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls={item.id}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {item.label} <ChevronDownIcon />
      </button>
      <div className="dd-menu" id={item.id}>
        {item.children.map((c) => (
          <Link key={c.href} href={c.href} aria-current={c.href === pathname ? 'page' : undefined}>
            <b>{c.label}</b>
            <span>{c.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header" id="top">
      <div className="wrap">
        <Link className="brand" href={ROUTES.home} aria-label="EDAS home">
          <img src={SITE.logo.src} alt={SITE.logo.alt} width={SITE.logo.width} height={SITE.logo.height} />
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <Dropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={item.cta ? 'nav-cta' : undefined}
                aria-current={item.href === pathname ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
