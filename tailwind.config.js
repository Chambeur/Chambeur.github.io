/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/*.html",
    "./_layouts/*.html",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
