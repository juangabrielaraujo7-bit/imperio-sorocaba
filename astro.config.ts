import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { business } from './src/data/business';

// O domínio vem de src/data/business.ts (siteUrl).
export default defineConfig({
  site: business.siteUrl,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
  },
});
