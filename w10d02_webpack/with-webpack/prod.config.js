const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[contenthash].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})