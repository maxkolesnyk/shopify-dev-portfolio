/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './blog/**/*.html', './services/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bodoni Moda"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        surface: '#0A0A0A',
        surfaceLight: '#111111',
        accent: '#C8FF00',
        muted: '#D0D0D0',
        cream: '#F5F0E8',
      },
    },
  },
  plugins: [],
}
