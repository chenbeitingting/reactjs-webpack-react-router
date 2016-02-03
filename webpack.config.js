'use strict'

/*webpack-dev-server --hot*/
var webpack = require('webpack');


module.exports = {
    entry: [
         'webpack/hot/dev-server', // 'only' prevents reload on syntax errors
        __dirname + '/app.js'
    ],
    output:{
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve:{
        root: __dirname + '/',
        extensions:['', '.js', '.css'],
        modulesDirectories: ["node_modules", "self_modules","content"]
    },
    module:{
        loaders: [
            {test: /\.js?$/, loaders: ['react-hot-loader','jsx-loader'],exclude: /node_modules/},
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {test: /\.(eot|woff|gif|png|svg|ttf)(\?v=(\d|\.)*)*$/, loader: "file-loader"}
        ]
    },

    devtool: 'source-map'
};
