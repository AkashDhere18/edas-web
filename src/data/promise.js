export const PROMISE_HERO = {
  image: '/images/villa-mediterranean.webp',
  objectPosition: 'center',
  label: 'The EDAS Promise',
  title: 'Your plot. Your villa. One complete journey.',
  text: 'Design, approvals, engineering and construction by one accountable team. Launching at Veda Monteza, Alibaug.',
};

export const PROMISE_POINTS = [
  { label: 'One partner', title: 'Every step, one team', text: 'Design, approvals, engineering, procurement and construction under one contract.' },
  { label: 'Your choice', title: 'Your plot, your style', text: 'Pick a villa format and architectural style. We engineer it for your plot.' },
  { label: 'Clarity', title: 'No hidden costs', text: 'Costs follow approved drawings and the BOQ, paid as work progresses.' },
];

// "Choose your style" (The EDAS Promise page).
// Each style has an exterior image (shown first) and an interior image (shown when the image is tapped).
// Put the images in public/images/styles/. Styles 4–6 are placeholders: replace their text, colours and images.
export const VILLA_STYLES = [
  {
    key: 'mco',
    name: 'Modern Contemporary',
    exterior: {
      image: '/images/styles/modern-contemporary-exterior.webp',
      keywords: ['Simple', 'Elegant', 'Timeless'],
      description: 'Clean lines, open spaces and a refined material palette for modern living.',
      colors: ['#D2C2AE', '#9A9895', '#4A4A4A'],
    },
    interior: {
      image: '/images/styles/modern-contemporary-interior.webp',
      keywords: ['Clean', 'Elegant', 'Functional'],
      description: 'A refined, modern aesthetic with clean lines, open spaces and a balanced mix of warm and cool tones.',
      colors: ['#C9C3BA', '#A79F95', '#3F3F3F', '#6E5038'],
      materials: ['Stone', 'Wood veneer', 'Textured paint', 'Glass', 'Metal accent'],
      feel: ['Open & airy', 'Modern', 'Sophisticated'],
    },
    
  },
  {
    key: 'me',
    name: 'Mediterranean',
    exterior: {
      image: '/images/styles/mediterranean-exterior.webp',
      keywords: ['Warm', 'Classic', 'Inviting'],
      description: 'Arches, textured walls and earthy tones that evoke a relaxed coastal charm.',
      colors: ['#EFD6B0', '#D3955F', '#B0512E'],
    },
    interior: {
      image: '/images/styles/mediterranean-interior.webp',
      keywords: ['Warm', 'Timeless', 'Inviting'],
      description: 'A warm and relaxed aesthetic with natural textures, arches and earthy tones that bring in a coastal charm.',
      colors: ['#EADCC6', '#D2B28E', '#A8462B', '#6B7553', '#B5AFA6'],
      materials: ['Lime plaster', 'Terracotta', 'Natural stone', 'Wood beams', 'Wrought iron'],
      feel: ['Warm', 'Natural', 'Charming'],
    },
  },
  
  // TODO: replace styles 4–6 with the real names, text, colours and images
  {
    key: 'tr',
    name: 'Tropical',
    exterior: {
      image: '/images/styles/tropical-exterior.webp',
      keywords: ['Natural', 'Airy', 'Relaxed'],
      description: 'Natural materials, wide overhangs and open spaces for a breezy, outdoor lifestyle.',
      colors: ['#9AA57F', '#A79A78', '#5A4535'],
    },
    interior: {
      image: '/images/styles/tropical-interior.webp',
      keywords: ['Natural', 'Breezy', 'Relaxed'],
      description: 'A breezy and earthy aesthetic with natural materials, light textures and a seamless connection to nature.',
      colors: ['#E2DACD', '#B5A792', '#6F7A4F', '#5B4332', '#3E4B2F'],
      materials: ['Rattan / cane', 'Teak wood', 'Natural stone', 'Linen fabric', 'Plant elements'],
      feel: ['Relaxed', 'Natural', 'Indoor–outdoor'],
    },
   
  },
  {
    key: 'mi',
    name: 'Minimalist',
    exterior: {
      image: '/images/styles/minimalist-exterior.webp',
      keywords: ['Calm', 'Functional', 'Sophisticated'],
      description: 'Pure forms, uncluttered design and thoughtful detailing for a peaceful life.',
      colors: ['#D6D4D0', '#A3A19E', '#3E3E3E'],
    },
    interior: {
      image: '/images/styles/minimalist-interior.webp',
      keywords: ['Calm', 'Simple', 'Refined'],
      description: 'A clutter-free, understated aesthetic with pure forms, neutral tones and thoughtful detailing.',
      colors: ['#E3DDD4', '#B3A795', '#8E8378', '#6E716D', '#3A3B3C'],
      materials: ['Micro cement', 'Light wood', 'Textured paint', 'Glass', 'Matte finish'],
      feel: ['Clean', 'Calm', 'Timeless'],
    },
   
  },
  {
    key: 'trd',
    name: 'Traditional',
    exterior: {
      image: '/images/styles/traditional-exterior.webp',
      keywords: ['Rooted', 'Warm', 'Enduring'],
      description: 'Timeless architectural elements that celebrate heritage and a sense of belonging.',
      colors: ['#B48E6A', '#A97B53', '#6B4426'],
    },
    interior: {
      image: '/images/styles/traditional-interior.webp',
      keywords: ['Rooted', 'Elegant', 'Enduring'],
      description: 'A classic aesthetic with rich materials, traditional details and a sense of heritage and warmth.',
      colors: ['#ECDDC6', '#C49A6C', '#6B4A33', '#9C3F25', '#4B5A3A'],
      materials: ['Natural stone', 'Wood carving', 'Brass accents', 'Handcrafted tiles', 'Textured fabric'],
      feel: ['Heritage', 'Elegant', 'Timeless'],
    },
    
  },
  {
    key: 'co',
    name: 'Luxury Contemporary',
     exterior: {
      image: '/images/styles/luxury-contemporary-exterior.webp',
      keywords: ['Premium', 'Distinctive', 'Refined'],
      description: 'A bold composition with premium finishes and refined detailing for elevated living.',
      colors: ['#A7A39E', '#8A7466', '#3B2E2B'],
    },
    interior: {
      image: '/images/styles/luxury-contemporary-interior.webp',
      keywords: ['Premium', 'Distinctive', 'Refined'],
      description: 'A sophisticated aesthetic with premium finishes, statement elements and a bold yet elegant look.',
      colors: ['#E2DCD3', '#A69B8E', '#7A6F65', '#5A4332', '#1F1F1F'],
      materials: ['Marble / stone', 'Wood veneer', 'Metal accent', 'Textured walls', 'Premium fabric'],
      feel: ['Premium', 'Sophisticated', 'Iconic'],
    },
   
  },
];


// Design library (The EDAS Promise page): every plot with its design options (one exterior per style).
// Each option has a full image (viewer) and a light "-sm" version (cards) in public/images/plots/.
// Optional per option: label (shown instead of the style, e.g. a second view of the same style).
// Optional per plot: size, format (shown on the card). Plots with no options are hidden.
const img = (name) => ({ image: `/images/plots/plot-${name}.webp`, thumb: `/images/plots/plot-${name}-sm.webp` });

export const PLOT_DESIGNS = [
  {
    plot: '7',
    options: [
      { style: 'Mediterranean', ...img('7-mediterranean') },
      { style: 'Tropical', ...img('7-tropical') },
      { style: 'Luxury Contemporary', ...img('7-luxury-contemporary') },
      { style: 'Modern European', ...img('7-modern-european') },
      { style: 'Neo-Classical', ...img('7-neo-classical') },
    ],
  },
  {
    plot: '11',
    options: [
      { style: 'Mediterranean', ...img('11-mediterranean') },
      { style: 'Tropical', ...img('11-tropical') },
      { style: 'Luxury Contemporary', ...img('11-luxury-contemporary') },
      { style: 'Modern European', ...img('11-modern-european') },
    ],
  },
  {
    plot: '16',
    options: [
      { style: 'Mediterranean', ...img('16-mediterranean') },
      { style: 'Tropical', ...img('16-tropical') },
      { style: 'Luxury Contemporary', ...img('16-luxury-contemporary') },
      { style: 'Modern European', ...img('16-modern-european') },
    ],
  },
  {
    plot: '22',
    options: [
      { style: 'Modern European', label: 'Modern European · View 1', ...img('22-modern-european') },
      { style: 'Modern European', label: 'Modern European · View 2', ...img('22-modern-european-2') },
    ],
  },
  {
    plot: '24',
    options: [
      { style: 'Mediterranean', ...img('24-mediterranean') },
      { style: 'Luxury Contemporary', ...img('24-luxury-contemporary') },
      { style: 'Modern European', ...img('24-modern-european') },
    ],
  },
  {
    plot: '28',
    options: [
      { style: 'Tropical', ...img('28-tropical') },
      { style: 'Modern European', ...img('28-modern-european') },
    ],
  },
  {
    plot: '31',
    options: [
      { style: 'Mediterranean', ...img('31-mediterranean') },
      { style: 'Tropical', ...img('31-tropical') },
      { style: 'Luxury Contemporary', ...img('31-luxury-contemporary') },
      { style: 'Modern European', ...img('31-modern-european') },
    ],
  },
  {
    plot: '40',
    options: [
      { style: 'Mediterranean', ...img('40-mediterranean') },
      { style: 'Tropical', ...img('40-tropical') },
      { style: 'Luxury Contemporary', ...img('40-luxury-contemporary') },
      { style: 'Modern European', ...img('40-modern-european') },
    ],
  },
  {
    plot: '42',
    options: [
      { style: 'Mediterranean', ...img('42-mediterranean') },
      { style: 'Modern Contemporary', ...img('42-modern-contemporary') },
    ],
  },
];



// export const VILLA_FORMATS = [
//   {
//     code: 'EDAS 01',
//     name: 'Weekend',
//     text: 'Compact and easy to maintain.',
//     specs: [['Built-up', '1,200–1,500 sq ft'], ['Plot', 'about 1,500 sq ft'], ['Bedrooms', '2']],
//   },
//   {
//     code: 'EDAS 02',
//     name: 'Family',
//     text: 'Connected living for the whole family.',
//     specs: [['Built-up', '1,800–2,200 sq ft'], ['Plot', '2,000–2,200 sq ft'], ['Bedrooms', '3']],
//   },
//   {
//     code: 'EDAS 03',
//     name: 'Signature',
//     text: 'Generous volumes and outdoor living.',
//     specs: [['Built-up', '2,500–3,000 sq ft'], ['Plot', '3,000–4,000 sq ft'], ['Bedrooms', '4']],
//   },
// ];

// The first four stops are "Design", the last four "Build".

// Villa formats (The EDAS Promise page). Images are transparent cut-outs in public/images/formats/.
export const VILLA_FORMATS = [
  {
    code: 'Format 01',
    name: 'EDAS Classic',
    image: '/images/edas-classic.webp',
    text: 'Compact and easy to maintain.',
    specs: [['Built-up', '1,200–1,500 sq ft'], ['Plot', 'about 1,500 sq ft'], ['Bedrooms', '2']],
  },
  {
    code: 'Format 02',
    name: 'EDAS Royal',
    image: '/images/edas-royal.webp',
    text: 'Connected living for the whole family.',
    specs: [['Built-up', '1,800–2,200 sq ft'], ['Plot', '2,000–2,200 sq ft'], ['Bedrooms', '3']],
  },
  {
    code: 'Format 03',
    name: 'EDAS Grande',
    image: '/images/edas-grande.webp',
    text: 'Generous volumes and outdoor living.',
    specs: [['Built-up', '2,500–3,000 sq ft'], ['Plot', '3,000–4,000 sq ft'], ['Bedrooms', '4']],
  },
];

export const JOURNEY = [
  { title: 'Site visit', text: 'We walk the plot and check what it allows' },
  { title: 'Choose a format', text: 'EDAS Classic, Royal or Grande' },
  { title: 'Choose a style', text: 'Tropical, Mediterranean or Contemporary' },
  { title: 'Final design', text: 'Architecture, structure, MEP and BOQ' },
  { title: 'Approvals', text: 'Applications and liaison handled' },
  { title: 'Construction', text: 'Foundation to external plaster' },
  { title: 'Warm shell', text: 'Weather-protected, ready for finishes' },
  { title: 'Your home', text: 'Optional interiors, landscape and pool' },
];


export const PROMISE_FORM = {
  id: 'promise',
  title: 'Vision book request', // used in the email subject
  email: 'coordination@edasprojects.com', // shown to visitors if sending fails
  fields: [
    { id: 'v-name', name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { id: 'v-phone', name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
    { id: 'v-loc', name: 'plotLocation', label: 'Plot location', type: 'text' },
    { id: 'v-size', name: 'plotSize', label: 'Plot size (sq ft)', type: 'text' },
    { id: 'v-style', name: 'preferredStyle', label: 'Preferred style', options: ['Not sure yet', 'Modern Contemporary', 'Mediterranean', 'Tropical', 'Minimalist', 'Traditional', 'Luxury Contemporary'] },
    { id: 'v-when', name: 'startWhen', label: 'When to start', options: ['Within 3 months', '3–6 months', '6–12 months', 'Just exploring'] },
  ],
  messageId: 'coo-msg',
  submitLabel: 'Request vision book',
};
