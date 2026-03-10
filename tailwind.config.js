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
        surface: '#FAFAFA',
        surfaceLight: '#FFFFFF',
        accent: '#C8FF00',
        accentDark: '#A3D900',
        muted: '#6B7280',
        cream: '#1A1A1A',
        secondary: '#374151',
      },
    },
  },
  plugins: [],
}
