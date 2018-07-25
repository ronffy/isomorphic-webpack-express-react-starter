const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (err, webpackConfig) {
  const prod = webpackConfig.mode === 'production';
  return {
    entry: './main_browser.js',
    output: {
      filename: 'bundle_browser.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: prod ? false : 'source-map',
    devServer: {
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-2', 'react'],
              plugins: [['transform-runtime', {
                "polyfill": true
              }]]
            },
          },
          exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        title: '首页',
        filename: 'index.html',
        template: './entry.ejs',
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ]
  }
}
