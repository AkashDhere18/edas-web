import { ROUTES } from '@/lib/routes';

export const TURNKEY_HERO = {
  image: '/images/site-hero-2.webp',
  objectPosition: 'center',
  label: 'EDAS Projects',
  title: 'Turnkey construction, from drawings to handover.',
  text: 'One team responsible for design coordination, approvals, construction and quality.',
};

// "icon" names match CAPABILITY_ICONS in components/Icons.jsx
export const CAPABILITIES = [
  { icon: 'contracting', title: 'General contracting', text: 'Turnkey construction of residential and commercial buildings.' },
  { icon: 'villa', title: 'Villas & residences', text: 'Private homes, including design-ready villas under the **EDAS Promise**.' },
  { icon: 'interiors', title: 'Interiors & fit-outs', text: 'High-end fit-outs for homes, hospitality and offices.' },
  { icon: 'facade', title: 'Retrofitting & façades', text: 'Structural retrofitting, façade works and safety upgrades.' },
  { icon: 'waterproofing', title: 'Waterproofing', text: 'Basements, terraces, podiums and wet areas.' },
  { icon: 'fabrication', title: 'Fabrication & infrastructure', text: 'Steel structures, roads, utilities and HT/LT electrical works.' },
];

export const TURNKEY_STEPS = [
  { title: 'Pre-construction', text: 'Drawings, structure and MEP coordinated; BOQ and cost plan; approvals.' },
  { title: 'Foundation', text: 'Setting out, excavation, PCC and RCC foundations, plinth.' },
  { title: 'Structure & shell', text: 'Frame, masonry, plaster and waterproofing, inspected at each stage.' },
  { title: 'Services & handover', text: 'Electrical, plumbing and HVAC provisions, testing and documentation.' },
];

export const TURNKEY_PROMISE = {
  image: '/images/render-28-tropical.webp',
  alt: 'Modern Tropical villa design',
  label: 'The EDAS Promise',
  title: 'Own a plot? We’ll build the villa on it.',
  text: 'Three villa formats, three architectural styles and one accountable team, with milestone-linked payments.',
  cta: { label: 'Explore the EDAS Promise', href: ROUTES.promise },
};

// A project without "image" shows the building icon; without "href" the card is not a link.
export const PROJECTS = [
  {
    image: '/images/site-p-heights.webp',
    alt: 'Imperial Heights, Miraj',
    objectPosition: 'center 30%',
    status: 'live',
    statusLabel: 'Under construction',
    title: 'Imperial Heights, Miraj',
    meta: ['G+8 residential', '28,000 sq ft'],
  },
  {
    image: '/images/site-p-hotel.webp',
    alt: 'Hotel Rudhva, Jath',
    status: 'live',
    statusLabel: 'Under construction',
    title: 'Hotel Rudhva, Jath',
    meta: ['G+7 hotel', '52,000 sq ft'],
  },
  {
    status: 'done',
    statusLabel: 'Completed',
    title: 'Imperial Square, Miraj',
    meta: ['G+6 mixed use', '35,000 sq ft'],
  },
  {
    href: ROUTES.promise,
    image: '/images/veda-monteza-layout.webp',
    alt: 'Veda Monteza plotted layout, artist’s impression',
    status: 'land',
    statusLabel: 'Land stage',
    title: 'Veda Monteza, Alibaug',
    meta: ['Villa plots', 'EDAS Promise'],
  },
];

export const TURNKEY_CONTACT = {
  name: 'EDAS Projects',
  email: 'coordination@edasprojects.com',
  phone: '+91 99751 35552',
};

// export const TURNKEY_FORM = {
//   email: 'coordination@edasprojects.com',
//   fields: [
//     { id: 'c-name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
//     { id: 'c-phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
//     { id: 'c-email', label: 'Email', type: 'email', autoComplete: 'email' },
//     {
//       id: 'c-type',
//       label: 'Project type',
//       options: ['Private villa', 'Residential building', 'Hotel / hospitality', 'Commercial', 'Interiors', 'Other'],
//     },
//     { id: 'c-loc', label: 'Location', type: 'text' },
//     { id: 'c-area', label: 'Approx. area (sq ft)', type: 'text' },
//   ],
//   messageId: 'coo-msg',
//   submitLabel: 'Request a site visit',
// };

export const TURNKEY_FORM = {
  id: 'turnkey',
  title: 'Turnkey construction', // used in the email subject
  email: 'coordination@edasprojects.com', // shown to visitors if sending fails
  fields: [
    { id: 'c-name', name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { id: 'c-phone', name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
    { id: 'c-email', name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    {
      id: 'c-type',
      name: 'projectType',
      label: 'Project type',
      options: ['Private villa', 'Residential building', 'Hotel / hospitality', 'Commercial', 'Interiors', 'Other'],
    },
    { id: 'c-loc', name: 'location', label: 'Location', type: 'text' },
    { id: 'c-area', name: 'area', label: 'Approx. area (sq ft)', type: 'text' },
  ],
  messageId: 'coo-msg',
  submitLabel: 'Request a site visit',
};
