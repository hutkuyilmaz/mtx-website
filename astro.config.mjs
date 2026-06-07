import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/*
// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000, // Blogun 4321'de çalışırken, Materix burada çalışacak!
  },

  integrations: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()]
  }
});*/


export default defineConfig({
  // Essential for dynamic sitemaps and structural path normalization
  site: 'https://hutkuyilmaz.github.io',
  // Essential for routing assets out of the correct sub-directory container
  base: 'hutkuyilmaz',
  integrations: [tailwindcss()],
});