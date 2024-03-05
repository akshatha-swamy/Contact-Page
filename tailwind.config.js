/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        navbar:{
          100:'#FF4F5A',//text
          200:'#595959'
        }
      }
    },
  },
  plugins: [],
}
