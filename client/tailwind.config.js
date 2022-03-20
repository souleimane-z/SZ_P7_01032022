module.exports = { //custom proprieties 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#003b49',
      secondary: '#F39237',
      grey: '#f2f3f3',
      black: '#000000',
      white: '#fff',
      green: '#00bf6f',
      red: '#ff2626',
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      err: ['Courier Prime'],
    },
    screens: {
      responsive: { max: '1250px' },
      responsiveSmall: { max: '800px' },
      responsiveSMedium: { max: '365px' },
      responsiveXS: { max: '330px' },
    },
    extends: {
      lineHeight: {
        'leadingLarge': '30',
      }
    }, 
  },
  plugins: [require('@tailwindcss/forms')],
  
};
