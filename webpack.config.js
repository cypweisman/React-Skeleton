// var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/app.js",
  // app: path.join(__dirname, 'src', 'app.js'),

  output: {
    path: './dist',
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  devServer: {
    port: 8000,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },

      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]


};

