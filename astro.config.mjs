import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://kinmenguide.com';
const CONTENT_COLLECTIONS = ['attractions', 'itineraries', 'food', 'transport', 'areas', 'hotels', 'car-rental', 'tours', 'guides'];

// Map a generated page URL to the content file's `updatedAt` so Google gets a
// real freshness signal. Falls back to the build date for non-content pages.
function lastmodFor(urlPath) {
  const match = urlPath.match(/^\/([a-z-]+)\/([a-z0-9-]+)\/$/);
  if (match && CONTENT_COLLECTIONS.includes(match[1])) {
    const file = path.join('src/content', match[1], `${match[2]}.md`);
    try {
      const raw = fs.readFileSync(file, 'utf8');
      const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/);
      const dateLine = frontmatter && frontmatter[1].match(/updatedAt:\s*(\S+)/);
      if (dateLine) {
        const date = new Date(dateLine[1]);
        if (!Number.isNaN(date.getTime())) return date;
      }
    } catch {
      // source missing or unreadable: fall through to build date
    }
  }
  return new Date();
}

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/404/') && !page.endsWith('/plan/') && !page.endsWith('/trip/'),
    serialize: (item) => {
      const url = new URL(item.url);
      item.lastmod = lastmodFor(url.pathname);
      return item;
    },
  })],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
  devToolbar: { enabled: false }
});
