const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })

      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}