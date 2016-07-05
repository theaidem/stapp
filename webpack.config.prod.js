let webpack = require('webpack')
import baseConfig from './webpack.config.base'

module.exports = {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'GH_PAGES': JSON.stringify(JSON.parse(process.env.GH_PAGES || 'false') ),
				'NODE_ENV': '"production"'
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	],
	module: {
		...baseConfig.module,
		loaders: [
			...baseConfig.module.loaders
		]
	}
};
