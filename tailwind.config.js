/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          900: '#111827'
        }
      }
    },
  },
  plugins: [],
}
