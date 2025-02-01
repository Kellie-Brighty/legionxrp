/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F1C587',
          dark: '#875B30',
        },
        secondary: '#D3D9CF',
        accent: '#558899',
        background: '#171616',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        baskerville: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
} 