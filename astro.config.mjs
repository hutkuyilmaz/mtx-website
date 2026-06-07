import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hutkuyilmaz.github.io',
  base: '/mtx-website',
  output: 'static',
  compressHTML: true,
  build: {
    assets: '_astro'
  }
});