// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', ...config.fontFamily.sans],
      },
      colors: {
        red: {
          ...config.colors.red,
          950: '#E8373D',
        },
        green: {
          ...config.colors.green,
          950: '#32C156',
        },
        yellow: {
          ...config.colors.yellow,
          950: '#E4A40F',
          1000: '#FAF8D4',
        },
        blue: {
          ...config.colors.blue,
          950: '#035392',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
