import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://skuzow.com',
  vite: {
    plugins: [
      tailwindcss({
        applyBaseStyles: false
      })
    ]
  },
  integrations: [vue(), sitemap()],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true
    },
    routing: {
      fallbackType: 'rewrite'
    }
  }
});
