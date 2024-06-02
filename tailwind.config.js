/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '376px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mac: '1680px',
      hd: '1920px',
    },
    fontFamily: {
      'roboto-regular': ['Roboto Regular'],
      'roboto-medium': ['Roboto Medium'],
      'roboto-bold': ['Roboto Bold'],
      'geomanist-book': ['Geomanist Book'],
      'geomanist-regular': ['Geomanist Regular'],
    },
    extend: {},
  },
  plugins: [],
};
