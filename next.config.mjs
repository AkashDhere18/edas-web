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

const nextConfig = {
  async redirects() {
    return Object.entries(OLD_ADDRESSES).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
