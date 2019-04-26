const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
    resolve: {
        modules: ["node_modules"],
        extensions: ['*', '.js', '.jsx', '.json', '.css', 'html'],
        alias: {
            "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
        }
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["env", "react"],    // используемые плагины
                    plugins: [
                        "transform-decorators-legacy", "transform-async-to-generator", "transform-class-properties",
                        ['import', {libraryName: "antd", style: true}]
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    },
                ],
            }
        ]
    },
    devtool: "eval-source-map",
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
        // new HtmlWebpackPlugin(),
        new HTMLInlineCSSWebpackPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru|pl/)
    ]
};

console.log("common");