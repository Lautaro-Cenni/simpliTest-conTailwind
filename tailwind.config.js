module.exports = {
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layout/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem'
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: []
}
