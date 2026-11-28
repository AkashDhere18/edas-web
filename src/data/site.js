import { ROUTES } from '@/lib/routes';

export const SITE = {
  name: 'EDAS Group',
  url: 'https://edasprojects.com', // live address, no trailing slash (used for sitemap, robots and share previews)
  description:
    'EDAS Group: real estate advisory (EDAS Asset Advisors) and turnkey construction (EDAS Projects) under one accountable partner.',
  email: 'operations@edasprojects.com',
  phone: '+91 87679 56623',
  topBarText: 'Real estate advisory & turnkey construction · Mumbai, Alibaug & Western Maharashtra',
  logo: { src: '/images/logo.png', alt: 'EDAS, Innovate | Build | Inspire', width: 520, height: 124 },
};

// Main navigation. "children" renders as the dropdown.
export const NAV = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About Us', href: ROUTES.about },
  { label: 'Advisory', href: ROUTES.advisory },
  { label: 'Turnkey Construction', href: ROUTES.turnkey },
  { label: 'The EDAS Promise', href: ROUTES.promise },
  // {
  //   label: 'Construction',
  //   id: 'dd-construction',
  //   children: [
  //     { label: 'Turnkey Construction', text: 'Homes, hotels and commercial buildings', href: ROUTES.turnkey },
  //     { label: 'The EDAS Promise', text: 'Design-ready villas on your plot', href: ROUTES.promise },
  //   ],
  // },
  { label: 'Careers', href: ROUTES.careers },
  { label: 'Contact Us', href: ROUTES.contact, cta: true },
];

export const FOOTER = {
  blurb: 'Real estate advisory and turnkey construction, under one accountable partner.',
  lines: ['From plan to possession · From capital to closure', 'From stress to strength · From land to landmark'],
  columns: [
    {
      title: 'Businesses',
      links: [
        { label: 'EDAS Asset Advisors', href: ROUTES.advisory },
        { label: 'EDAS Projects', href: ROUTES.turnkey },
        { label: 'The EDAS Promise', href: ROUTES.promise },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: ROUTES.about },
        { label: 'Careers', href: ROUTES.careers },
        { label: 'Contact Us', href: ROUTES.contact },
      ],
    },
  ],
  addresses: ['Dadar, Mumbai', 'Miraj, Maharashtra'],
  legal: [
    'EDAS Projects Private Limited (GSTIN 27AAICE4972E2ZG) and EDAS Asset Advisors LLP.',
    '© 2026 EDAS Group · Innovate | Build | Inspire',
  ],
};

export const CLIENTS = [
  { src: '/images/client-sunteck.svg', name: 'Sunteck Realty' },
  { src: '/images/client-veda.png', name: 'Veda Life Spaces' },
  { src: '/images/client-oberoi.svg', name: 'Oberoi Realty' },
  { src: '/images/client-hoabl.png', name: 'The House of Abhinandan Lodha' },
  { src: '/images/client-edelweiss-arc.png', name: 'Edelweiss Asset Reconstruction' },
  { src: '/images/client-neo.png', name: 'Neo Wealth' },
];
