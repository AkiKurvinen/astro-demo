// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE || 'http://localhost:3000',
  base: import.meta.env.BASE_PATH || '',
  integrations: [preact()],
});