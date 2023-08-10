/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      maxWidth: {
        '600': '600px'
      },
      backgroundColor: {
        bg_primary: '#F5F5F5', // background root
        bg_blue1: '#1266dd', // background navigation
        bg_blue2: '#0071c2', //  btn blue
        bg_input: '#e8f0fe', // background input
        bg_red: '#f73859', //  btn red
      },
      textColor: {
        color_333: '#333'
      },
    },
  },
  plugins: [],
}