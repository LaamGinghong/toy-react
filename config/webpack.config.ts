import { Configuration } from 'webpack'
import { resolve } from 'path'

const configuration: Configuration = {
  mode: 'development',
  // devtool: 'source-map',
  entry: {
    app: resolve('src', 'index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { cacheDirectory: true },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
}

export default configuration
