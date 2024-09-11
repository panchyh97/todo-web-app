/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif']
      },
      colors: {
        black: '#5E5D62',
        yellow: '#FFD471',
        red: '#EE4A4A',
        'gray-100': '#FAFBFD',
        'gray-200': '#F2F2F2',
        'gray-300': '#C5C5C5',
      }
    },
  },
  plugins: [],
}

