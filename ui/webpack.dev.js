const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJS = require('uglify-es-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/js/',
        chunkFilename: 'bundle.js'
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public/'),
        inline: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        compress: true,
        proxy: {
            '/api/**': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new BundleAnalyzerPlugin({openAnalyzer: false})
    ]
});

console.log("dev");