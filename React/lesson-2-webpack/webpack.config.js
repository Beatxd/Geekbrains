const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./js/app.js']
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "../"
  },
  watch: true,
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" }
    ]
  }
};
