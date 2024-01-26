/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

    "./*.{html,js}",

    "./node_modules/flowbite/**/*.js",

    "./pages/**/*.html"
],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('../assets/snowbackground.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

