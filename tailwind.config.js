/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')
  ],
}

