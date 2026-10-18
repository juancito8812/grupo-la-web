// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://juancito8812.github.io',
  base: process.env.BASE_PATH || '/',
  build: { inlineStylesheets: 'auto' },
});
