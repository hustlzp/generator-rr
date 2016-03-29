var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'webpack-output'),
        filename: 'bundle_[hash].js',
        publicPath: 'http://your.cdn.com'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            }, {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?name=[hash].[ext]'
                    // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false}'
                ]
            }, {
                test: /.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            favicon: './static/images/logo.png'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
};