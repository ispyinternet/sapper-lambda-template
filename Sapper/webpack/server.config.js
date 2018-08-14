const config = require('sapper/webpack/config.js');
const pkg = require('../package.json');

module.exports = {
	entry: config.server.entry(),
	output: config.server.output(),
	target: 'node',
	resolve: {
		extensions: ['.js', '.json', '.html'],
		mainFields: ['svelte', 'module', 'browser', 'main']
	},
	module: {
		rules: [{
				test: /\.html$/,
				use: {
					loader: 'svelte-loader',
					options: {
						css: false,
						generate: 'ssr'
					}
				}
			},
			{
				type: 'javascript/auto',
				test: /\.mjs$/,
				use: []
			}
		]
	},
	mode: process.env.NODE_ENV,
	performance: {
		hints: false // it doesn't matter if server.js is large
	}
};