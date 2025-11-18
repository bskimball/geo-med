// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://medairyrealestate.com',
  adapter: cloudflare({ imageService: 'compile' }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});
