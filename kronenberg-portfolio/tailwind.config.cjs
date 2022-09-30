/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./index.html', './src/**/*.{jsx, js}'],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom':'#020014'
      }
    },
  },
  plugins: [],
}
