const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'bundle.js',
        chunkFilename: 'bundle.js',
        publicPath: '/js/'
    },
    entry: [
        './src/index.js',
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        })
    ]
});

console.log("prod");