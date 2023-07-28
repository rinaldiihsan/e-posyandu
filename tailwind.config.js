// @type {import('tailwindcss').Config}
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    fontFamily: {
      mont: ['Montserrat'],
    },
    screens: {
      handphone: '300px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        'grad-blue': '#2c74b3',
        'grad-purple': '#02abd0',
        'blue-btn': '#205295',
      },
    },
  },
  plugins: [require('./node_modules/flowbite/plugin')],
};
