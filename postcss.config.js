const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['index.html'],
  whitelist: [
    'iframe',
    'is-over',
    'is-loaded',
    'is-scrollHero',
    'is-moreExpanded'
  ],
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
