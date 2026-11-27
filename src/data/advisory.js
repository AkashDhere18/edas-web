export const ADVISORY_HERO = {
  image: '/images/banner-advisory.webp',
  objectPosition: '72% center',
  label: 'EDAS Asset Advisors',
  title: 'Clarity at every stage of a real estate asset.',
  text: 'Independent technical and financial advice for landowners, developers, lenders and investors.',
};

export const PRACTICES = [
  {
    line: 'From land to development',
    title: 'Land, diligence & feasibility',
    items: [
      'Land evaluation and technical due diligence',
      'Title, land-use and regulatory review',
      'Feasibility and techno-economic viability (TEV)',
      'Land acquisition, monetisation and JDA structuring',
    ],
  },
  {
    line: 'From plan to possession',
    title: 'Development management & owner’s representation',
    items: ['Owner’s representative on site', 'Design, approvals and liaison', 'Contractor and vendor management', 'Cost, quality and programme control'],
  },
  {
    line: 'From capital to closure',
    title: 'Capital & financial advisory',
    items: [
      'Financial modelling and cash-flow planning',
      'Bank debt and capital raising',
      'Escrow and cash-flow governance',
      'RERA, lender and investor reporting',
    ],
  },
  {
    line: 'From stress to strength',
    title: 'Lender & special situations',
    items: [
      'Lender’s Independent Engineer (LIE)',
      'Construction and escrow monitoring',
      'Cost-to-complete reviews',
      'Resolution advice for stalled projects',
    ],
  },
];

export const ADVISORY_STEPS = [
  { title: 'Diagnostic review', text: 'Site audit, technical feasibility and validation of the financial model.' },
  { title: 'Mandate structuring', text: 'Clear scope, KPIs and milestones, in writing.' },
  { title: 'Execution', text: 'Dedicated site monitors and financial systems in place.' },
  { title: 'Ongoing governance', text: 'Monthly dashboards, escrow audits and lender updates.' },
];

export const REPORT_PAGES = ['/images/tdd-cover.webp', '/images/tdd-risk.webp', '/images/tdd-survey.webp'];

export const CASES = [
  { kind: 'Development management', title: 'Plotted project, Alibaug', text: 'Owner’s representation from layout and approvals through site execution.' },
  {
    kind: 'Due diligence',
    title: '15-acre land parcel, Alibaug',
    text: 'Technical due diligence on land valued at about ₹175 Cr: title, land use, access and regulatory review before acquisition.',
  },
  { kind: 'Land acquisition', title: 'JDA project, Alibaug', text: 'Land acquisition support and joint development agreement structuring.' },
  {
    kind: 'Construction monitoring',
    title: 'Stressed project, Pune',
    text: 'Independent monitoring of construction progress and cost for an asset reconstruction company.',
  },
];

export const MORE_CASES = [
  { kind: 'Feasibility', title: '8-acre plotted land, Alibaug', text: 'TEV report and phase-wise cash-flow model.' },
  {
    kind: 'Land monetisation',
    title: 'Large coastal land bank, Raigad',
    text: 'Phase 1: land-record rectification and a master layout, with **EDAS** as single-point advisor.',
  },
  { kind: 'Cost-to-complete', title: 'Landmark mixed-use tower, Mumbai', text: 'Balance-cost review and value-engineering options.' },
];

export const ADVISORY_CONTACT = {
  name: 'Prayag Agarwal',
  email: 'prayag.agarwal@edasprojects.com',
  phone: '+91 97681 46860',
};

export const ADVISORY_FORM = {
  email: 'prayag.agarwal@edasprojects.com',
  fields: [
    { id: 'a-name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { id: 'a-org', label: 'Organisation', type: 'text', autoComplete: 'organization' },
    { id: 'a-email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
    { id: 'a-phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    { id: 'a-type', label: 'I am a', options: ['Developer', 'Landowner', 'Bank / NBFC', 'ARC / fund', 'Investor'] },
    { id: 'a-stage', label: 'Project stage', options: ['Land / pre-launch', 'Under construction', 'Stalled', 'Completed'] },
  ],
  messageId: 'pra-msg',
  submitLabel: 'Send enquiry',
};
