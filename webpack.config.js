var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'shared'
    ],
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('bundle.min.css')
  ]
};
