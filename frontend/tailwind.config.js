/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#c1121f",
        'secondary': "#003049",
        'background': "#fdf0d5",
        'accent': "#780000",
        'alt': "#669bbc"
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}

