/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#272838',
        'anti-flash-white': '#eef0f2',
        'celtic-blue': '#266dd3',
        'dark-cyan': '#048a81',
        'folty': '#ff1654',
      }
    },
  },
  plugins: [],
}