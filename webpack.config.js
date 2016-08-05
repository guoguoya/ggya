var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
console.log('path='+__dirname);
console.log('path='+path.join(__dirname, '/index/'));
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path:'public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: [path.join(__dirname, 'index'), path.join(__dirname, '/containers/'), path.join(__dirname, '/components/'),
                 path.join(__dirname, '/actions/'), path.join(__dirname, '/components/'), path.join(__dirname, '/containers/'), path.join(__dirname, '/reducers/')
                 ,path.join(__dirname, 'routes')]
            }
        ]
    }
}