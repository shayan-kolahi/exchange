module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      font_family: 'IRANSansWeb',
      font_family_Bold: 'IRANSansFaNum-Bold'
    },
    container: {
      center: true,
      screens: {
        '2xl': '1140px',
      },
    },
    extend: {
      colors: {
        mainColor: '#23b4e7',
        secondColor: '#0478a1',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
  },
}
