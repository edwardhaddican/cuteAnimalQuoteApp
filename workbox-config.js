module.exports = {
  globDirectory: process.NODE_ENV === 'production' ? 'build/' : 'public/',
  globPatterns: ['**/*.{jpg,png,ico,xml,json,html}'],
  swDest: process.NODE_ENV === 'production' ? 'build/sw.js' : 'public/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
