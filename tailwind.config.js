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
      backgroundColor: {
        bg_primary: '#F5F5F5',
        bg_blue: '#1266dd',
        btn_red: '#f73859',
        btn_blue: '#3961fb'
      },
      textColor: {
        color_333: '#333'
      }
    },
  },
  plugins: [],
}