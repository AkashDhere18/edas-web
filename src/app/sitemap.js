import { SITE } from '@/data/site';
import { ROUTES } from '@/lib/routes';

// Served at /sitemap.xml — every page of the site
export default function sitemap() {
  return Object.values(ROUTES).map((path) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
