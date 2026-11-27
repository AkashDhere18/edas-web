const line = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2" {...line}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2.4" {...line}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2" {...line}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="2" {...line}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

// Placeholder for a project card that has no photo
export function BuildingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M8 56h48M18 56V12h28v44" />
      <path d="M24 20h6M34 20h6M24 28h6M34 28h6M24 36h6M34 36h6M24 44h6M34 44h6M29 56v-6h6v6" />
    </svg>
  );
}

function CapIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...line}>
      {children}
    </svg>
  );
}

// Icons for the "Capabilities" cards (Turnkey Solutions page)
export const CAPABILITY_ICONS = {
  contracting: (
    <CapIcon>
      <path d="M3 21h18M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </CapIcon>
  ),
  villa: (
    <CapIcon>
      <path d="M2 11l10-7 10 7" />
      <path d="M4 10v10h16V10" />
      <path d="M10 20v-5h4v5" />
    </CapIcon>
  ),
  interiors: (
    <CapIcon>
      <path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
      <path d="M2 18h20M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    </CapIcon>
  ),
  facade: (
    <CapIcon>
      <rect x="5" y="3" width="14" height="18" />
      <path d="M9 7h6M9 11h6M9 15h6M2 21h20" />
    </CapIcon>
  ),
  waterproofing: (
    <CapIcon>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
    </CapIcon>
  ),
  fabrication: (
    <CapIcon>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </CapIcon>
  ),
};
