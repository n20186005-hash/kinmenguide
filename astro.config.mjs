import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://kinmenguide.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') && !page.endsWith('/plan/') })],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
  devToolbar: { enabled: false }
});
