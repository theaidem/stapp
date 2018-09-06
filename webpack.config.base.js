var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const styleUses = (process.env.NODE_ENV === 'production') ? [{
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: '/'
    }
}, 'css-loader'] : ['style-loader', {
    loader: 'css-loader',
    options: {
        module: true
    }
}
]

module.exports = {
    entry: [
        './source/scripts/index'
    ],
    output: {
        filename: 'js/[name].app.[hash:4].min.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.[hash:4].css',
            chunkFilename: '[id].css'
        }),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, 'source', 'images',
                'logo.png'),
            prefix: 'icons-[hash]/',
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
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'source/scripts')
        }, {
            test: /\.jsx$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'source/scripts')
        }, {
            test: /\.css$/,
            use: styleUses
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader?name=images/[name].[hash:4].[ext]'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[hash:4].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=images/[name].[hash:4].[ext]&mimetype=image/svg+xml'
        }]
    }
}
