/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        'primary': "#142580",
        'semi-transparent': 'rgba(0,0,0,0.3)',
        'gray': {
          '1': '#F6F6F6' ,
          '2': '#EAEEF2'
        }
      }
    },
  },
  plugins: [],
}