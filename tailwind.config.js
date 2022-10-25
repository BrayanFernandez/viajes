/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", "./node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('../public/img/fondo.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'BtnCreateTodo': '#61DAFA',
      }),
      textColor: {
        'OnePieceAzul': '#4083C1',
        'OnePieceRojo': '#D70000',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif', 'Arial', 'Helvetica'],
        'OnePiece': ['ONE PIECE', 'sans-serif', 'Bahnschrift'],
        'JamesStroker': ['James Stroker']
      },
      boxShadow: {
        'InputSearch': '0px 5px 50px rgba(32, 35, 41, 0.25)',
        'BtnModal': '0px 5px 25px rgba(97, 218, 250, 0.5)',
        'TodoItem': '0px 5px 50px rgba(32, 35, 41, 0.15)'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
