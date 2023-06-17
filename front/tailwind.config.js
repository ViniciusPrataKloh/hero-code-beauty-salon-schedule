/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        '-primary': '#348789',
        '-secondary': '#001489',
        '-secondary-50': '#3e53cf',

        '--gray-50': '#DDDFEB',
        '--gray-100': '#97909050',
        '--gray-200': '#535653',
        '--gray-300': '#7c888388',

        '--white': '#fff',
        '--black': '#272830',
      },

      backgroundImage: {
        'login': 'url(./src/assets/background-login.png)',
        'signup': 'url(./src/assets/background-signup.png)'
      }
    },
  },

  plugins: [],
}
