import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Na GitHub Pages workflow ustawia SITE i BASE_PATH (np. /tax-trio).
// Po podpięciu własnej domeny wystarczy SITE=https://taxtrio.pl i BASE_PATH=/.
export default defineConfig({
  site: process.env.SITE ?? 'https://taxtrio.pl',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
});
