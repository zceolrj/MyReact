var path = require('path')

module.exports = {
	entry: [
		'./client/index.js'
	],
	output: {
		path: './client',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-3']
				}
			}
		]
	},
	resolve: {
		root: [ 
			path.resolve('./public') 
		]
	}
}