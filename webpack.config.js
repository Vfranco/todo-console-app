/** @type {import('webpack').Configuration} */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./main.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        fallback: {
            "fs": false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /.(css|sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    externals: {
        "stream": "stream-browserify",
        "buffer": "buffer"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './')
        },
        port: 3000,
        open: true,
        hot: true
    },
    target: "web"
};