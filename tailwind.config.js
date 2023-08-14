/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px',
        '5/7': '73%'
      },
      maxWidth: {
        '600': '600px',
      },
      backgroundColor: {
        bg_primary: '#F5F5F5', // background root
        bg_input: '#e8f0fe', // background input
        bg_blue1: '#1266dd', // background navigation
        bg_blue2: '#0071c2', //  btn blue
        bg_red: '#f73859', //  btn red
        bg_yellow: '#febb02',
        bg_overlay60: 'rgba(0, 0, 0, 0.6)'
      },
      textColor: {
        color_333: '#333',
        color_666: '#666',
        gray_1: '#65676b',
        gray_2: '#8a8d91',
        gray_3: '#aaa',
        color_red: '#E13427',
        color_green: '#16c784'
      },
      fontSize: {
        13: '13px',
      }
    },
  },
  plugins: [],
}