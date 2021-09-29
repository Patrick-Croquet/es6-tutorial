const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './js/main.js',
        ratefinder: './js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};