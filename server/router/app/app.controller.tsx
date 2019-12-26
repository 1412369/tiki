import * as React from 'react';
import { generateEmptyMap } from '../../configs';
import * as path from 'path';

import App from '@src/routes';

import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Request, Response, NextFunction } from 'express';
import viewEngine from '../../views/engine';
import { AppProvider } from '@src/context';

const isFile = (req: Request) => {
  if (
    req.url.endsWith('.js') ||
    req.url.endsWith('.css') ||
    req.url.endsWith('.ico') ||
    req.url.endsWith('.svg') ||
    req.url.endsWith('.png') ||
    req.url.endsWith('.gif') ||
    req.url.endsWith('.jpg') ||
    req.url.endsWith('.json') ||
    req.url.endsWith('.map') ||
    req.url.endsWith('.tff') ||
    req.url.endsWith('.woff') ||
    req.url.endsWith('.jpeg') ||
    req.url.endsWith('.mp4') ||
    req.url.endsWith('.mp3') ||
    req.url.endsWith('.xml') ||
    req.url.endsWith('.txt')
  ) {
    return true;
  }
  return false;
};
export const handleError = (
  _error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(500).send('server error');
};
export const renderApp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isFile(req)) {
    return next();
  }
  let context: any = {};
  const webExtractor = new ChunkExtractor({
    statsFile: path.resolve('dist/client/loadable-stats.json'),
    entrypoints: ['browser'],
  });
  const sheet = new ServerStyleSheet();
  const defaultState = {
    tickets: generateEmptyMap({
      row: 9,
      col: 11,
      vip: [12, 30],
      deluxe: [31, 47],
      picked: [1, 2, 3, 4, 7, 8, 9, 40, 41, 42],
    }),
    location: {
      id: 0,
      name: 'CGV Van Hanh Mall',
      start: '9:00',
      end: '11:30',
    },
    meta: {
      total: 48,
      currency: 'vnd',
      types: ['standard', 'deluxe', 'vip'],
      standard: {
        price: 100000,
        discount: '',
      },
      vip: {
        price: 150000,
        discount: '',
      },
      deluxe: {
        price: 200000,
        discount: '',
      },
    },
  };
  const jsx: any = webExtractor.collectChunks(
    <StaticRouter location={req.url} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <AppProvider defaultState={defaultState}>
          <App />
        </AppProvider>
      </StyleSheetManager>
    </StaticRouter>
  );
  if (context.status === 401) {
    return res.redirect('/sign-in');
  }
  const html: any = renderToString(jsx);
  const scriptTags: any = webExtractor.getScriptTags();
  const styleTags: any = sheet.getStyleTags();
  const styleLinks: any = webExtractor.getStyleTags();
  const helmet: any = Helmet.renderStatic();
  const fullHTML = viewEngine({
    styleTags,
    html,
    defaultState,
    scriptTags,
    styleLinks,
    helmet,
  });
  res.send(fullHTML);
};
