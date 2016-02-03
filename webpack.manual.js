'use strict'

var webpack = require('webpack');


module.exports = {
    entry:[__dirname + '/app.js'],
    output:{
        path:__dirname + '/build/',
        filename: 'bundle.[hash].js',
/*        chunkFilename:"[id].bundle.[hash].js",*/
        publicPath: './build/'
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
/**
 * Created by chenbei on 16/1/25.
 */
