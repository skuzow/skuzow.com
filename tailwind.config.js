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
        header: ['GeistMono-Medium', 'system-ui', 'sans-serif'],
        title: ['Geist-Medium', 'system-ui', 'sans-serif']
      },
      animation: {
        marquee1: 'marquee1 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },
      keyframes: {
        marquee1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: []
};
