// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: "development",
  // devtool: false,
  // devServer: {
  //   port: 3000
  // },
  entry: "./src/newIndex.js",
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: '[contenthash].bundle.js'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx']},
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}