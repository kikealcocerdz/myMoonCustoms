/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '200px':'1000px'
      },
      colors: {
        'blue-clean':'#79ccda',
        'dark-blue':'#29408c',
        'yellow-moon': '#e9eb80'
      }
    },
    fontFamily: {
      sans: ['Open Sans, sans-serif']
    }
  },
  plugins: [],
}

