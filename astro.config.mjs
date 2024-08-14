import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://skuzow.com',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    vue(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
