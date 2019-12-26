const path = require('path');
var nodeExternals = require('webpack-node-externals');
const { webpackCore } = require('./common');

module.exports = webpackCore({
  entry: {
    server: `./server/index.ts`,
  },
  output: {
    path: `${process.cwd()}/dist/server`,
    filename: `[name].js`,
  },
  mode: 'development',
  devtool: 'source-map',
  externals: [nodeExternals()],
  target: 'node',
});
