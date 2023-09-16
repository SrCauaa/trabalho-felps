const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  entry: {
    index: path.resolve(__dirname, "./Trabalho_codigo/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./Final"),
    filename: "[name].bunde.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./Trabalho_codigo/index.html"),
    }),
  ],
};