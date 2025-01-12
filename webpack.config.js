const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bandle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
