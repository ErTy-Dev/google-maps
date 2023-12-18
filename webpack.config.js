const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development' // По умолчанию режим development
let target = 'web'

if (process.env.NODE_ENV === 'production') {
	// Режим production, если
	// при запуске вебпака было указано --mode=production
	mode = 'production'
	target = 'browserslist'
}

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/pages/index.html',
		filename: 'index.html',
		chunks: ['app'],
	}),
	new HtmlWebpackPlugin({
		template: './src/pages/clasters.html',
		filename: 'clasters.html',
		chunks: ['cluster'],
	}),
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css',
	}),
]

module.exports = {
	mode,
	plugins,
	entry: {
		app: './src/defaultMap.ts',
		cluster: './src/clasterMap.ts',
	},
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		// filename: '[name].bundle.js',
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true,
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devServer: {
		hot: true,
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
			{
				test: /\.(html)$/,
				use: ['html-loader'],
			},
			{
				test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
}
