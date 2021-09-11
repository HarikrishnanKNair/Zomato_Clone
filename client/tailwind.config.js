module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        zomato: {
          50: '#ffe4e9',
          100: '#feb6c0',
          200: '#f88797',
          300: '#f3586d',
          400: '#ef2b44',
          500: '#d6132b',
          600: '#a70c21',
          700: '#780617',
          800: '#4a010c',
          900: '#1f0003',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
