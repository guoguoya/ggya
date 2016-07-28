var webpack = require('webpack');
module.exports = {
	   entry:[ 
	   'webpack/hot/dev-server',
	   'webpack-hot-middleware/client',
	   './index.js'
	  ],
	output: {
 	 path: '/',
	 publicPath: 'http://localhost:3000',
   	 filename: 'bundle.js'
	},
	plugins: [
 	   new webpack.HotModuleReplacementPlugin()
	]
}
