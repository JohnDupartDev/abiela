// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // 1. Importamos la integración
import sitemap from '@astrojs/sitemap'; // 3. Importamos sitemap

// https://astro.build/config
export default defineConfig({
  // URL oficial de Abiela para SEO y generación de rutas absolutas
  site: 'https://abiela.com.co', 
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  // 2. Registramos las integraciones aquí
  integrations: [
    icon(),
    sitemap() // 4. Registro de sitemap para Google
  ] 
});