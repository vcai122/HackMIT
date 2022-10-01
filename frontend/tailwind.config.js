/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'lora': 'Lora',
      'roboto': 'Roboto'
    },
    extend: {
      colors: {
        'f2u-tan': "#FCFBF3",
        'f2u-green': '#3F8C62',
        'f2u-black': '#182836',
        'f2u-orange': '#EF8421',
        'f2u-brown': '#93745C'
      }
    },
  },
  plugins: [],
}