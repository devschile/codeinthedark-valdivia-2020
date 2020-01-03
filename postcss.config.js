const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['index.html'],
  whitelist: ['is-over'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production'
      ? [require('autoprefixer'), require('cssnano'), purgecss]
      : [])
  ]
}
