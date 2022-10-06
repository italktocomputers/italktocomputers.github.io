const webpack = require('webpack');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: path.resolve(__dirname, './init.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {targets: 'defaults'}]],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]',
                                exportLocalsConvention: 'camelCaseOnly',
                            },
                            sourceMap: true,
                        },
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new StyleLintPlugin({extensions: ['scss'], failOnError: true}),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            failOnError: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
};
