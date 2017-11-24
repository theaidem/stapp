var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: [
        './source/scripts/index'
    ],
    output: {
        filename: 'js/app.[hash:4].js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('css/style.[hash:4].css'),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, 'source', 'images', 'logo.png'),
            prefix: 'icons-[hash:4]/',
        }),
        new HtmlWebpackPlugin({
            title: 'stapp',
            ghPage: process.env.GH_PAGES || false,
            filename: 'index.html',
            inject: false,
            template: '!!ejs-loader!source/index.ejs'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'source/scripts')},
            {test: /\.jsx$/, loaders: ['babel-loader'], include: path.join(__dirname, 'source/scripts')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader', publicPath: '../'})},
            {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[hash:4].[ext]'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash:4].[ext]'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=images/[name].[hash:4].[ext]&mimetype=image/svg+xml'}
        ]
    }
}
