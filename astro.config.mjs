import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  // 👇 GitHub Pages'teki canlı sitenin tam adresi
  site: 'https://hutkuyilmaz.github.io',

  // 👇 GitHub'daki repo adın (Başında ve sonunda eğik çizgi olmalı)
  base: '/mtx-website/',

  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',

  build: {
    assets: '_astro'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});