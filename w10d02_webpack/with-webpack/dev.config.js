const {merge} = require('webpack-merge');
const common = require("./webpack.config")

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  devServer: {
    port: 3000
  }
})