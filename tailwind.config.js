const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    //   fontFamily: {
    //     mono: ['IBM Plex Mono'],
    //     sans: ['Roboto'],
    //     poppins: ['Poppins']
    //   },
      colors: {
        blue: {
          default: '#0062FF'
        },
        red: {
          default: '#FC5A5A'
        },
        gray: {
          dracula: '#282a36',
          100: '#171725',
          200: '#44444f',
          300: '#696974',
          400: '#92929d',
          500: '#b5b5be',
          600: '#d5d5dc',
          700: '#e2e2ea',
          800: '#f1f1f5',
          900: '#fafafb'
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
