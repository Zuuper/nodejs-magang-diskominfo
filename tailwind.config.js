module.exports = {
  purge: {
    enabled: true,
    content : ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['hover', 'focus','active'],
    },
  },
  plugins: [],
}
