var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
console.log('path='+__dirname);
console.log('path='+path.join(__dirname, '/index/'));
module.exports = {
    entry:  path.resolve(__dirname, 'appProd.js'),
    output: {
        filename: 'server.bundle.js'
    },
    plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
    ] ,
    devtool: false,
    target: 'node',
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
      ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
      }, {}),

      node: {
        __filename: true,
        __dirname: true
      },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: [path.join(__dirname, 'index'), path.join(__dirname, '/containers/'), path.join(__dirname, '/components/'),
                 path.join(__dirname, '/actions/'), path.join(__dirname, '/components/'), path.join(__dirname, '/containers/'), path.join(__dirname, '/reducers/')
                 ,path.join(__dirname, 'routes'),path.join(__dirname),'appProd']
            }
        ]
    }
}