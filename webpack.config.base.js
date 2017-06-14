var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: [
		'./src/scripts/index'
	],
	output: {
		filename: 'js/app.[hash:4].js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new ExtractTextPlugin('css/style.[hash:4].css'),
		new HtmlWebpackPlugin({
			title: 'stapp',
			filename: 'index.html',
			template: '!!ejs-loader!src/index.ejs',
			favicon: path.join(__dirname, 'src', 'images', 'favicon.ico')
		})
	],
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src/scripts') },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader', publicPath: "../" })},
			{ test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[hash:4].[ext]' },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'},
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'},
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/octet-stream'},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]'},
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=images/[name].[hash:4].[ext]&mimetype=image/svg+xml' }
		]
	}
}
