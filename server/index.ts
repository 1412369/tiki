import './init';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';

import * as helmet from 'helmet';

import { AppRouter } from './router';
import { cacheTime } from './configs';
import { webpackMiddleware } from './middleware';

declare var ENVS: any;
const app: express.Application = express();
//============== init middleware ==============
(() => {
  app.use(cookieParser());
  app.use(cors());
  app.use(express.static('public', { maxAge: cacheTime }));
  app.use(express.static('dist'));
  app.use(bodyParser.json());
  if (ENVS.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
  } else {
    webpackMiddleware(app);
  }
})();

//============== init router ==============
(() => {
  app.use(AppRouter);
})();

const PORT: number = parseInt(ENVS.PORT, 10);
app.listen(PORT, () => {
  console.log('Running on http://localhost:' + PORT);
});
