import { defineConfig } from 'astro/config';

import tailwind@latest from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind@latest()]
});