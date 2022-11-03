/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
        "roboto": ["'Roboto Mono'", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
