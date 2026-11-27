import { ROUTES } from '@/lib/routes';

export const HERO_SLIDES = [
  {
    image: '/images/hero-advice-delivery.webp',
    position: '68% center', 
    label: 'EDAS Group',
    title: 'Real estate advice, carried through to delivery.',
    text: 'We help developers, landowners and lenders make sound real estate decisions, and we build what gets decided.',
    actions: [
      { label: 'About EDAS', href: ROUTES.about, style: 'btn-white' },
      { label: 'Contact Us', href: ROUTES.contact, style: 'btn-line-white' },
    ],
  },
  {
    image: '/images/streets-to-strength.jpeg',
    position: '60% center', // focus point when the screen crops the image (phones, laptops)
    label: 'Lender & special situations',
    title: 'Stress to Strength.',
    text: 'Turning complexity into clarity. Challenges into opportunities.',
    actions: [
      { label: 'Explore Advisory', href: ROUTES.advisory, style: 'btn-white' },
      { label: 'Contact Us', href: ROUTES.contact, style: 'btn-line-white' },
    ],
  },
  {
    image: '/images/hero-asset-advisory.webp',
    position: '50% center',
    label: 'EDAS Asset Advisors',
    title: 'Clarity at every stage of a real estate asset.',
    text: 'Land diligence, development management, capital advisory and independent support for lenders.',
    actions: [{ label: 'Explore Advisory', href: ROUTES.advisory, style: 'btn-white' }],
  },
  {
    image: '/images/hero-land-to-landmark.webp',
    position: '78% center',
    label: 'EDAS Projects',
    title: 'From land to landmark.',
    text: 'Turnkey construction for homes, hotels and commercial buildings, and design-ready villas under the **EDAS Promise**.',
    actions: [
      { label: 'Explore Construction', href: ROUTES.turnkey, style: 'btn-white' },
      { label: 'The EDAS Promise', href: ROUTES.promise, style: 'btn-line-white' },
    ],
  },
];

export const INTRO = {
  label: 'Who we are',
  title: 'One partner who understands both the site and the numbers.',
  text: '**EDAS** brings construction management and real estate credit experience to the same table. Developers, landowners and lenders get one independent view of progress, cost and risk, and one team accountable for delivery.',
  choices: [
    { title: 'Asset Advisory', text: 'Development management, due diligence, capital advisory and lender support', href: ROUTES.advisory },
    { title: 'Construction', text: 'Turnkey building and design-ready villas under the EDAS Promise', href: ROUTES.turnkey },
  ],
};

export const BUSINESSES = [
  {
    href: ROUTES.advisory,
    image: '/images/hero-terrace.webp',
    alt: 'Drawings and plans on a terrace overlooking the Mumbai skyline',
    entity: 'EDAS Asset Advisors',
    title: 'Real estate advisory',
    text: 'Land diligence, development management, capital advisory and lender support.',
    chips: ['Development management', 'Due diligence', 'Capital advisory', 'Lender’s engineer'],
    more: 'Explore advisory',
  },
  {
    href: ROUTES.turnkey,
    image: '/images/card-construction.webp',
    alt: 'Concrete frame of a building under construction',
    entity: 'EDAS Projects',
    title: 'Turnkey construction',
    text: 'Design-to-handover contracting for homes, hotels and commercial buildings.',
    chips: ['Villas', 'Residential', 'Hospitality', 'Interiors'],
    more: 'Explore construction',
  },
];

export const PROMISE_TEASER = {
  image: '/images/styles/mediterranean-exterior.webp',
  alt: 'Coastal Mediterranean villa design for Veda Monteza',
  label: 'The EDAS Promise',
  title: 'Your plot. Your villa. One complete journey.',
  text: 'Choose a villa format and an architectural style. **EDAS** handles design, approvals, engineering and construction.',
  ticks: [
    { strong: 'One partner', text: ' from first sketch to handover' },
    { strong: 'Three styles:', text: ' Tropical, Mediterranean, Contemporary' },
    { strong: 'Payments', text: ' linked to visible progress on site' },
  ],
  note: 'Launching at Veda Monteza, Alibaug. More developments to follow.',
  cta: { label: 'Explore the EDAS Promise', href: ROUTES.promise },
};

export const FEATURED_PROJECTS = [
  {
    href: ROUTES.turnkey,
    image: '/images/site-p-heights.webp',
    alt: 'Imperial Heights, Miraj',
    objectPosition: 'center 30%',
    status: 'live',
    statusLabel: 'Under construction',
    title: 'Imperial Heights, Miraj',
    meta: ['G+8 residential', '28,000 sq ft'],
  },
  {
    href: ROUTES.turnkey,
    image: '/images/site-p-hotel.webp',
    alt: 'Hotel Rudhva, Jath',
    status: 'live',
    statusLabel: 'Under construction',
    title: 'Hotel Rudhva, Jath',
    meta: ['G+7 hotel', '52,000 sq ft'],
  },
  {
    href: ROUTES.promise,
    image: '/images/veda-monteza-layout.webp',
    alt: 'Veda Monteza plotted layout, artist’s impression',
    status: 'land',
    statusLabel: 'Land stage',
    title: 'Veda Monteza, Alibaug',
    meta: ['Design-ready villa plots', 'EDAS Promise'],
  },
];

export const CTA = {
  title: 'Have a project or a decision ahead?',
  text: 'Tell us where you are. The right team will reply within one working day.',
  button: { label: 'Contact Us', href: ROUTES.contact },
};
