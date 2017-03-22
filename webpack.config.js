var path = require('path')
var webpack = require('webpack');
module.exports = {
    entry: {
        app: "./app.js",
    },
    output: {
        path: "/test/dist/",
        filename: '[name].js',
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            }
        ]
    }
}