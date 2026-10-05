import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { business } from './src/data/business';

// O domínio vem de src/data/business.ts (siteUrl).
export default defineConfig({
  site: business.siteUrl,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // gera /troca-de-tela-sorocaba.html -> servido como /troca-de-tela-sorocaba (vercel.json cleanUrls)
    format: 'file',
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
  },
});
