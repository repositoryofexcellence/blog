/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      'sans': ['Axiforma'],
      'serif': ['Axiforma'],
      'mono':  ['Axiforma'],
      'display':  ['Axiforma'],
      'body': ['Axiforma'],
    }
  },
  plugins: [],
}