const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
});

const webpackMd5Hash = new WebpackMd5Hash();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: path.join(__dirname, 'src/index.html'),
    filename: 'index.html',
});

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [miniCssExtractPlugin, htmlWebpackPlugin, webpackMd5Hash],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        inline: true,
        host: 'localhost',
        port: 3001,
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath: '/',
    },
};
