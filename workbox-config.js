module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{jpg,png,ico,xml,json,html}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};