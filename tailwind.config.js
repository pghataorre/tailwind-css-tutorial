/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            primary: '#ff6363',
            secondary: {
                100: '#e2e2ds',
                200: '#888883'
            },
            fontFamily: {
                body: ['Nunito']
            } 
        }
      },
    },
    plugins: [],
  }