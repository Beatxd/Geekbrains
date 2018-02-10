// basic vars
const path = require('path');
const webpack = require('webpack');

// plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './js/app.js',
      './scss/style.scss'
    ]
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'sass-loader',
                options: {sourceMap: true}
              }
            ]

          }
        )
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin("./css/style.css"),
  ]
}
;
