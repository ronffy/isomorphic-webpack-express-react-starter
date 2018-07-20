const path = require('path');
module.exports = {
  entry: './main_browser.js',
  output: {
    filename: 'bundle_browser.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
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
        use: ['ignore-loader'],
      }
    ]
  }
}
