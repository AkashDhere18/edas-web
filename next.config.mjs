// /** @type {import('next').NextConfig} */

// // Old addresses that should keep working (static .html version and the first Next.js version)
// const OLD_ADDRESSES = {
//   '/index.html': '/',
//   '/about.html': '/about',
//   '/advisory.html': '/real-estate-advisory',
//   '/advisory': '/real-estate-advisory',
//   '/construction.html': '/turnkey-solutions',
//   '/construction': '/turnkey-solutions',
//   '/the-edas-promise.html': '/the-edas-promise',
//   '/careers.html': '/careers',
//   '/contact.html': '/contact',
// };

// const nextConfig = {
//   async redirects() {
//     return Object.entries(OLD_ADDRESSES).map(([source, destination]) => ({ source, destination, permanent: true }));
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

// Old addresses that should keep working (static .html version and the first Next.js version)
const OLD_ADDRESSES = {
  '/index.html': '/',
  '/about.html': '/about',
  '/advisory.html': '/real-estate-advisory',
  '/advisory': '/real-estate-advisory',
  '/construction.html': '/turnkey-solutions',
  '/construction': '/turnkey-solutions',
  '/the-edas-promise.html': '/the-edas-promise',
  '/careers.html': '/careers',
  '/contact.html': '/contact',
};

// Basic security headers for every page
const SECURITY_HEADERS = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return Object.entries(OLD_ADDRESSES).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
