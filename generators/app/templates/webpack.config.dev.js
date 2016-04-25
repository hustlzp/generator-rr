var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'webpack-output'),
        filename: 'bundle.js',
        publicPath: '/webpack-output/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /.css$/,
            loaders: ['style', 'css']
        }]
    },
    node: {
        fs: 'empty'
    }
};