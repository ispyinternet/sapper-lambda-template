module.exports = {
	context: __dirname,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: './deploy.js',
		library: '',
		libraryTarget: 'commonjs'
	},
	target: 'node',
	mode: process.env.NODE_ENV,
	performance: {
		hints: false // it doesn't matter if server.js is large
	},
	optimization: {
		minimize: false,
		nodeEnv: false
	},
	module: {
		rules: [{
			type: 'javascript/auto',
			test: /\.mjs$/,
			use: []
		}]
	},
	node: {
		__dirname: false
	}
};
