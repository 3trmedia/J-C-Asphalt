import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jcasphaltpaving.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
