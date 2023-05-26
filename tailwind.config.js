/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      first : '#0A2647',
      second :'#144272',
      third :'#205295',
      fourth :'#2C74B3',
    },
    fontFamily: {
      'IRANSansX-Medium': ['IRANSansX-Medium', 'sans-serif'],
      'IRANSansX-Regular': ['IRANSansX-Regular', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

