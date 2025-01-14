const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const isDev = !isProd;
  console.log("isProd", isProd);
  console.log("isDev", isDev);
  const filename = (ext) => isProd ? `[name].[contenthash].bandle.${ext}` : `[name].bandle.${ext}`;
  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "favicon.ico"),
            to: path.resolve(__dirname, "dist", "favicon.ico"),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: filename("css"),
      }),
    ];
    if (isDev) {
      base.push(new ESLintPlugin({
        extensions: ['.js'],
        overrideConfigFile: path.resolve(__dirname, "eslint.config.mjs"), // путь к конфигурации ESLint
        configType: "flat"
      }));
    }
    return base;
  };
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      main: ["@babel/polyfill", "./index.js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: filename("js"),
      clean: true,
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        core: path.resolve(__dirname, "src", "core"),
      },
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      watchFiles: "./",
    },
    devtool: isDev ? "source-map" : false,
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
