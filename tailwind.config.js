/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'customcard': '530px',
      },
      colors:{
        'aqua': '#00FFFF', // Define the aqua color
      }
    },
  },
  plugins: [],
}

