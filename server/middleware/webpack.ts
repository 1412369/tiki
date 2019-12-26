import { Application } from 'express';

export default (app: Application) => {
  const webpack = require('webpack');
  const webpackConfigs = require('@tools/webpack/client');
  const compiler = webpack(webpackConfigs);
  app.use(
    require('webpack-dev-middleware')(compiler, {
      logLevel: 'error',
      publicPath: webpackConfigs.output.publicPath,
      writeToDisk: true,
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
};
