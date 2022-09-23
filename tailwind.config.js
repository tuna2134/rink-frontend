/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dot: ['DotGothic16', 'sans-serif'],
        mui: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}