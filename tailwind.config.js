const { randomBytes } = require("crypto")

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

// TO PURGE
// NODE_ENV=production npm build