var webpack = require('webpack');
var path = require('path');
console.log('path='+__dirname);
console.log('path='+path.join(__dirname, '/index/'));
module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./index.js'
	],
	output: {
		path: '/',
		publicPath: '/javascript/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
				include: [path.join(__dirname, 'index'), path.join(__dirname, '/containers/'), path.join(__dirname, '/components/'),
				 path.join(__dirname, '/actions/'), path.join(__dirname, '/components/'), path.join(__dirname, '/containers/'), path.join(__dirname, '/reducers/')]
			}
		]
	}
}