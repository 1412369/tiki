import './reset.scss';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import * as React from 'react';
import { AppProvider } from '@src/context';
import App from './routes';
declare var ENVS: any;
declare var window: any;
const ClientApp: React.SFC<any> = () => {
  return (
    <BrowserRouter>
      <AppProvider defaultState={window.defaultState || {}}>
        <App />
      </AppProvider>
    </BrowserRouter>
  );
};
loadableReady(() => {
  hydrate(<ClientApp />, document.getElementById('app'));
});
if (ENVS.NODE_ENV === 'development' && module.hot) {
  module.hot && module.hot.accept();
}
