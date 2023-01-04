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
      'sans': ['Google Sans'],
      'serif': ['Google Sans'],
      'mono':  ['Google Sans'],
      'display':  ['Google Sans'],
      'body': ['Google Sans'],
    }
  },
  plugins: [],
}