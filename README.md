# EDAS Group website (Next.js)

Pixel-perfect Next.js version of the EDAS Group website, organised in the `edas-website-v2` folder structure.
I checked it against the original on every page at 1440, 1024, 820 and 390 px, in light and dark mode: 0 pixels differ. The carousel, dropdown, logo marquee, CAD/render slider, style tabs, forms and copy buttons also behave the same as the original.

- **Next.js 16.4.6** (App Router) · **React 19.3.1** · JavaScript + JSX
- All pages are prerendered as static HTML.
- Fonts (Inter, Manrope) are self-hosted through `@fontsource`, so there is no runtime dependency on Google Fonts.
- Exact versions are pinned and `package-lock.json` is included.

## Requirements

Node.js **20.9+** (Node 22 LTS recommended).

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Folder structure

```
public/
  images/                 all site images
  videos/                 (empty, ready for videos)
src/
  app/
    layout.jsx            shell: fonts, globals.css, TopBar, Navbar, Footer
    globals.css           the full site stylesheet
    page.jsx              Home                     /
    about/                About Us                 /about
    real-estate-advisory/ EDAS Asset Advisors      /real-estate-advisory
    turnkey-solutions/    EDAS Projects            /turnkey-solutions
    the-edas-promise/     The EDAS Promise         /the-edas-promise
    careers/              Careers                  /careers
    contact/              Contact Us               /contact
  components/             UI building blocks (Navbar, TopBar, Footer, HeroSlider, ClientsMarquee,
                          PageHero, ContactForm, ContactCard, LeadershipGrid, ServiceCards, Timeline …)
  data/                   all page text and lists, one file per page:
    site.js               company details, navigation, footer, client logos
    home.js, about.js, advisory.js, turnkey.js, promise.js, careers.js, contact.js
  lib/
    routes.js             every page URL in one place
    brandText.js          renders **EDAS** in data text as the navy brand name
next.config.mjs           redirects from old addresses
```

### Editing content

Most text changes happen in `src/data`. For example, add a team member in `data/about.js` (`TEAM`), add a project in `data/turnkey.js` (`PROJECTS`), or change a phone number in `data/site.js`. Wrap a brand name in `**…**` (for example `**EDAS Promise**`) to show it in the bold navy brand style.

### Old addresses

These permanently redirect (308): `/advisory` and `/advisory.html` → `/real-estate-advisory`, `/construction` and `/construction.html` → `/turnkey-solutions`, and the other `*.html` pages → their clean URL.

## Deploy

- **Vercel:** import the repository. No settings needed.
- **Any Node host:** run `npm ci && npm run build && npm start` (add `-p <port>` if needed; works behind Nginx or PM2).

## Notes

- The enquiry forms have no backend yet (same as the original). A valid submit shows the "Thank you" note. To receive submissions, add an API route under `src/app/api/` and mail helpers in `src/lib/`, then call them from `components/ContactForm.jsx`.
- Plain `<img>` tags are used on purpose so images render exactly like the design.
- In `globals.css`, the route-map pin's `rotate` sits in its own rule. Otherwise the build's CSS optimiser merges it into `transform` and the pins move.
