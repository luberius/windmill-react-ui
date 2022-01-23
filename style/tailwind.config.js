const windmill = require('../config')

module.exports = windmill({
  purge: ['./src/**/*.{tsx,ts,js,jsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
