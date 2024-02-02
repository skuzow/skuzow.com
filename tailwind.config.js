/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        primary: '#FFFFFF',
        secondary: '#FAFF00'
      },
      fontFamily: {
        header: ['Geist Mono Medium', 'system-ui', 'sans-serif'],
        title: ['Geist Medium', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
