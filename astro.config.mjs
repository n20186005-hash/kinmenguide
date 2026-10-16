import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://kinmenguide.com';
const CONTENT_COLLECTIONS = ['attractions', 'itineraries', 'food', 'transport', 'areas', 'hotels', 'car-rental', 'tours', 'guides'];

// Only publish dates that can be verified against the matching content page.
function lastmodFor(urlPath) {
  const match = urlPath.match(/^\/([a-z-]+)\/([a-z0-9-]+)\/$/);
  if (match && CONTENT_COLLECTIONS.includes(match[1])) {
    const file = path.join('src/content', match[1], `${match[2]}.md`);
    try {
      const raw = fs.readFileSync(file, 'utf8');
      const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/);
      const data = frontmatter && JSON.parse(frontmatter[1]);
      if (typeof data?.updatedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt)) {
        const date = new Date(`${data.updatedAt}T00:00:00.000Z`);
        if (!Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === data.updatedAt) return date;
      }
    } catch {
      // Unknown dates should be omitted, rather than replaced with build time.
    }
  }
  return undefined;
}

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/404/') && !page.endsWith('/plan/') && !page.endsWith('/trip/') && !page.endsWith('/search/'),
    serialize: (item) => {
      const url = new URL(item.url);
      const lastmod = lastmodFor(url.pathname);
      if (lastmod) item.lastmod = lastmod;
      else delete item.lastmod;
      return item;
    },
  })],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
  devToolbar: { enabled: false }
});
