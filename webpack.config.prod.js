var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'./src/scripts/index'
	],
	output: {
		filename: 'js/app.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebpackPlugin({
			title: 'stapp',
			filename: 'index.html',
			template: 'src/index.tpl',
			favicon: path.join(__dirname, 'src', 'images', 'favicon.ico')
		})
	],
	module: {
		loaders: [
			{ test: /\.(png|jpg)$/, loader: 'file-loader?name=/src/images/[name].[ext]' },
			{ test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src/scripts') },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
 			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=/fonts/[name].[ext]&mimetype=application/font-woff"},
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: "file?name=/fonts/[name].[ext]&mimetype=application/font-woff"}, 
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=/fonts/[name].[ext]&mimetype=application/octet-stream"}, 
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=/fonts/[name].[ext]"}, 
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=/images/[name].[ext]&mimetype=image/svg+xml" }
		]
	}
};
