const webpackBar = require('webpackbar')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src', 'index.jsx'),
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  plugins: [new webpackBar()],
}
