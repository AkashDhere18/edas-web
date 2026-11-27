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

// export const VILLA_STYLES = [
//   {
//     key: 'tr',
//     name: 'Modern Tropical',
//     tagline: 'Open, shaded, naturally connected.',
//     image: '/images/render-28-tropical.webp',
//     description: 'Deep overhangs, timber louvers and shaded verandahs that make the garden part of the house.',
//     swatches: [
//       ['#9B6A3C', 'Teak wood'],
//       ['#3A3D42', 'Gabled roof'],
//       ['#B8B2A7', 'Concrete finish'],
//       ['#A08E76', 'Stone cladding'],
//       ['#8FA3A2', 'Glass balustrade'],
//       ['#3B302B', 'Dark louvers'],
//     ],
//     plans: ['/images/plot28-gf-plan.webp', '/images/plot28-ff-plan.webp'],
//   },
//   {
//     key: 'me',
//     name: 'Coastal Mediterranean',
//     tagline: 'Warm, crafted, timeless.',
//     image: '/images/render-24-mediterranean.webp',
//     description: 'Arched openings, terracotta roof tiles, cream stucco and wrought iron for a relaxed holiday feeling.',
//     swatches: [
//       ['#C8673F', 'Terracotta tiles'],
//       ['#EFE6D3', 'Cream stucco'],
//       ['#6B3E24', 'Dark wood frames'],
//       ['#2E2A28', 'Wrought iron'],
//       ['#B89C78', 'Natural stone'],
//       ['#9A9A96', 'Stone pavers'],
//     ],
//     plans: ['/images/plot24-gf-plan.webp', '/images/plot24-ff-plan.webp'],
//   },
//   {
//     key: 'co',
//     name: 'Luxury Contemporary',
//     tagline: 'Clean, calm, refined.',
//     image: '/images/villa-contemporary.webp',
//     description: 'Strong horizontal lines, warm timber and large glazing that opens the house to the garden.',
//     swatches: [
//       ['#ECE8E1', 'Off-white stucco'],
//       ['#9A6436', 'Teak cladding'],
//       ['#3A3B3E', 'Dark metal'],
//       ['#D3CDC2', 'Large-format stone'],
//       ['#B7CBD0', 'Clear glass'],
//     ],
//     plans: ['/images/plan-11-gf.webp', '/images/plan-11-ff.webp'],
//   },
// ];
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
    // tagline: 'Open, shaded, naturally connected.',
    // description: 'Deep overhangs, timber louvers and shaded verandahs that make the garden part of the house.',
    // exterior: '/images/styles/modern-contemporary-exterior.webp',
    // interior: '/images/styles/modern-contemporary-interior.webp',
    // swatches: [
    //   ['#9B6A3C', 'Teak wood'],
    //   ['#3A3D42', 'Gabled roof'],
    //   ['#B8B2A7', 'Concrete finish'],
    //   ['#A08E76', 'Stone cladding'],
    //   ['#8FA3A2', 'Glass balustrade'],
    //   ['#3B302B', 'Dark louvers'],
    // ],
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
    // tagline: 'Warm, crafted, timeless.',
    // description: 'Arched openings, terracotta roof tiles, cream stucco and wrought iron for a relaxed holiday feeling.',
    // exterior: '/images/styles/mediterranean-exterior.webp',
    // interior: '/images/styles/mediterranean-interior.webp',
    // swatches: [
    //   ['#C8673F', 'Terracotta tiles'],
    //   ['#EFE6D3', 'Cream stucco'],
    //   ['#6B3E24', 'Dark wood frames'],
    //   ['#2E2A28', 'Wrought iron'],
    //   ['#B89C78', 'Natural stone'],
    //   ['#9A9A96', 'Stone pavers'],
    // ],
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
    // tagline: 'Short tagline for style four.',
    // description: 'One or two sentences describing the look, materials and feel of style four.',
    // exterior: '/images/styles/tropical-exterior.webp',
    // interior: '/images/styles/tropical-interior.webp',
    // swatches: [['#B8B2A7', 'Material one'], ['#3A3D42', 'Material two'], ['#9B6A3C', 'Material three']],
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
    // tagline: 'Short tagline for style five.',
    // description: 'One or two sentences describing the look, materials and feel of style five.',
    // exterior: '/images/styles/minimalist-exterior.webp',
    // interior: '/images/styles/minimalist-interior.webp',
    // swatches: [['#B8B2A7', 'Material one'], ['#3A3D42', 'Material two'], ['#9B6A3C', 'Material three']],
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
    // tagline: 'Short tagline for style six.',
    // description: 'One or two sentences describing the look, materials and feel of style six.',
    // exterior: '/images/styles/traditional-exterior.webp',
    // interior: '/images/styles/traditional-interior.webp',
    // swatches: [['#B8B2A7', 'Material one'], ['#3A3D42', 'Material two'], ['#9B6A3C', 'Material three']],
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
    // tagline: 'Clean, calm, refined.',
    // description: 'Strong horizontal lines, warm timber and large glazing that opens the house to the garden.',
    // exterior: '/images/styles/luxury-contemporary-exterior.webp',
    // interior: '/images/styles/luxury-contemporary-interior.webp',
    // swatches: [
    //   ['#ECE8E1', 'Off-white stucco'],
    //   ['#9A6436', 'Teak cladding'],
    //   ['#3A3B3E', 'Dark metal'],
    //   ['#D3CDC2', 'Large-format stone'],
    //   ['#B7CBD0', 'Clear glass'],
    // ],
  },
];

export const DESIGN_LIBRARY = [
  { image: '/images/board-24-mediterranean.webp', alt: 'Mediterranean villa design', caption: 'Mediterranean' },
  { image: '/images/board-28-tropical.webp', alt: 'Tropical villa design', caption: 'Tropical' },
  { image: '/images/board-40-contemporary.webp', alt: 'Contemporary villa design', caption: 'Contemporary' },
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

// export const PROMISE_FORM = {
//   email: 'coordination@edasprojects.com',
//   fields: [
//     { id: 'v-name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
//     { id: 'v-phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
//     { id: 'v-loc', label: 'Plot location', type: 'text' },
//     { id: 'v-size', label: 'Plot size (sq ft)', type: 'text' },
//     { id: 'v-style', label: 'Preferred style', options: ['Not sure yet', 'Modern Tropical', 'Coastal Mediterranean', 'Luxury Contemporary'] },
//     { id: 'v-when', label: 'When to start', options: ['Within 3 months', '3–6 months', '6–12 months', 'Just exploring'] },
//   ],
//   messageId: 'coo-msg',
//   submitLabel: 'Request vision book',
// };

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
