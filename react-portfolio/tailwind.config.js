/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
      },
      backgroundColor:{
        dark: '#000d1c',
      }
    },
  },
  plugins: [],
}