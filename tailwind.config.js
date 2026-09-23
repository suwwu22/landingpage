/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Paper-Inko', 'Rubik', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#FDF6D8',
        'cream-light': '#FEF9E7',
        'cream-card': '#FFFDF0',
        navy: '#2A4B6C',
        'navy-light': '#3B658E',
        'navy-dark': '#1F3A56',
        'navy-darker': '#16293E',
        brown: '#3D2C29',
        'brown-dark': '#291D1B',
        yellow: '#F7DE7A',
        'yellow-deep': '#F5CB44',
        'yellow-accent': '#FFD028',
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px 0px #1F3A56',
        'neo': '5px 5px 0px 0px #1F3A56',
        'neo-lg': '8px 8px 0px 0px #1F3A56',
        'neo-yellow': '5px 5px 0px 0px #F5CB44',
        'neo-white': '5px 5px 0px 0px #FFFFFF',
      },
    },
  },
  plugins: [],
};
