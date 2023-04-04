const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'ddd': '#dddddd',
        '888': '#888888',
        'f9f9f9': '#f0f0f0',
      },
      keyframes: {
        fade: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        fade_up: {
          'from': {
            opacity: '0',
            transform: 'translateY(1000px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fade_down: {
          'from': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          'to': {
            opacity: '0',
            transform: 'translateY(1000px)',
          },
        }
      },
      animation: {
        none: 'none',
        fade: 'fade 0.5s',
        fade_up: 'fade_up 0.5s',
        fade_down: 'fade_down 0.5s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
