/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
        dark: '#071f2d',    // Color de fondo corporativo
          blue: '#4f91bf',  // Azul del logo
          green: '#5fb660', // Verde del logo
        }
      }
    },
  },
  plugins: [],
}