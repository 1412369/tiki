const dotenv = require('dotenv');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const result = dotenv.config();
let ENVS = result.error ? {} : result.parsed;
const ROOT_PATH = path.resolve(__dirname, '../');
const tsLoader = {
  test: /\.(tsx|ts)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env', '@babel/preset-react'],
        comments: true,
        compact: false,
        plugins: [
          '@loadable/babel-plugin',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
            },
          ],
        ],
      },
    },
    'ts-loader',
  ],
};

const fileLoader = {
  test: /\.(png|jpg|gif|ttf|eot|woff|woff2|tcc|svg|otf)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: `/dist/client/`,
      },
    },
  ],
};
const styleLoader = {
  test: /\.(s*)css$/,
  use: [
    ENVS.NODE_ENV === 'production'
      ? MiniCssExtractPlugin.loader
      : 'style-loader',
    'css-loader',
    'sass-loader',
  ],
};
const serverStyleLoader = {
  test: /\.(s*)css$/,
  use: ['css-loader', 'sass-loader'],
};
const optimization = {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      },
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        cache: true,
        parallel: true,
        sourceMap: false,
      },
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};
const dynamicAlias = (path) => {
  return {
    '@root': path,
    '@utils': '@packages/utils',
    '@core': '@packages/core',
    //app alias
    '@src': '@packages/src',
  };
};
const resolve = {
  extensions: ['.json', '.css', '.scss', '.ts', '.tsx', '.js', '.jsx'],
  alias: dynamicAlias(ROOT_PATH),
};
module.exports.ENVS = ENVS;
module.exports.webpackCore = (options) => ({
  entry: options.entry,
  output: options.output,
  module: {
    rules: [
      tsLoader,
      fileLoader,
      options.target === 'web' ? styleLoader : serverStyleLoader,
    ],
  },
  resolve: resolve,
  node: options.node || {},
  target: options.target || 'web',
  externals: options.externals || [],
  mode: options.mode || 'development',
  devtool: options.devtool || '',
  optimization:
    options.target === 'node' || options.mode === 'development'
      ? {}
      : optimization,
  plugins: (options.plugins || []).concat([
    new webpack.DefinePlugin({
      ENVS: JSON.stringify(ENVS),
      'process.env': {
        NODE_ENV: JSON.stringify(ENVS.NODE_ENV),
        BROWSER: JSON.stringify(options.target !== 'node'),
        ROOT_PATH: JSON.stringify(ROOT_PATH),
      },
    }),
  ]),
  stats: 'minimal',
});
module.exports.dynamicAlias = dynamicAlias;
module.exports.resolve = resolve;
