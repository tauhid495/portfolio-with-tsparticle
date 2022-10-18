module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FFC107",

          "secondary": "#24242F",

          "accent": "#51A800",

          "neutral": "#1B1D1D",

          "base-100": "#212121",

          "info": "#2463EB",

          "success": "#16A249",

          "warning": "#DB7706",

          "error": "#DC2828",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}
