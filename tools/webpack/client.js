const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { ENVS, webpackCore } = require('./common');
const isPro = ENVS.NODE_ENV === 'production';
const plugins = (isPro) =>
  isPro ? [new ManifestPlugin()] : [new webpack.HotModuleReplacementPlugin()];

module.exports = webpackCore({
  entry: {
    browser: isPro
      ? './packages/src/index.tsx'
      : ['webpack-hot-middleware/client', './packages/src/index.tsx'],
  },
  output: {
    path: process.cwd() + `/dist/client`,
    chunkFilename: isPro ? 'chunk.[chunkhash].js' : '[name].js',
    filename: isPro ? `chunk.[chunkhash].js` : '[name].js',
    publicPath: `/client/`,
  },
  devtool: 'source-map',
  target: 'web',
  mode: ENVS.NODE_ENV,
  plugins: plugins(isPro).concat([
    new MiniCssExtractPlugin({
      filename: isPro ? 'chunk.[chunkhash].css' : '[name].css',
    }),
    new LoadablePlugin(),
  ]),
});
