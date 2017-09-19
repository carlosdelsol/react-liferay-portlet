const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC = path.resolve(__dirname, 'src/main/resources/META-INF/resources/src');
const DEST = path.resolve(__dirname, 'src/main/resources/META-INF/resources/dist');

module.exports = {
  entry: {
    app: SRC + '/index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: DEST,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, loaders: ['babel-loader'], include: SRC},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg$/, loader: 'svg-inline-loader'}
    ]
  }
};