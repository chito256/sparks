const webpack = require('webpack');
const path = require('path');

const nodeENV = process.env.NODE_ENV;

module.exports = {
  entry: [
    './lib/index.js'
  ],
  output: {
    path: path.join(__dirname, 'app', 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test:/\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(nodeENV) }
    })
  ]
}
