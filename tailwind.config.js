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
        'shfk-yellow': '#FAF8D4',
        'shfk-green': '#32C156',
        'shfk-blue': '#5856D6',
        'shfk-red': '#FF2D53',
        'shfk-orange': '#FF971D',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
