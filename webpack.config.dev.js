let webpack = require('webpack')
import baseConfig from './webpack.config.base'

const port = 3001

module.exports = {
    ...baseConfig,
    devtool: '#inline-source-map',
    entry: [
        ...baseConfig.entry,
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-dev-server/client?http://0.0.0.0:' + port,
        'webpack/hot/only-dev-server'
    ],
    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        ...baseConfig.module,
        loaders: [
            ...baseConfig.module.loaders
        ]
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        stats: {colors: true},
        hot: true,
        port: port
    }
}
