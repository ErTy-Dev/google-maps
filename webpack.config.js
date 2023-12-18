const path = require('path')

module.exports = {
	entry: {
		defaultMap: './src/defaultMap.ts',
		clasterMap: './src/clasterMap.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
}
