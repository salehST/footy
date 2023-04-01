const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.svg$/,
					use: ['babel-loader', 'vue-svg-loader'],
				},
			],
		},
		plugins: [
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				openAnalyzer: false,
			}),
		],
		devtool: 'source-map',
	},

	pluginOptions: {
		apollo: {
			lintGQL: true,
		},
	},
	pwa: {
		name: 'Play Footy',
		appleMobileWebAppCapable: 'yes',
	},
};
