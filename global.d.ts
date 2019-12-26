declare namespace NodeJS {
  export interface ProcessEnv {
    ROOT_PATH: string;
  }
  export interface Global {
    shallow: any;
    create: any;
  }
}
declare module 'react-test-renderer';
declare module '@loadable/component';
declare module 'cors';
declare module 'cookie-parser';
declare module 'compression';
declare module '@loadable/server';
declare module 'react-helmet';
// app modules
declare module '@core';
declare module '@utils';
declare module '@services';
declare module '@app-routes';
declare module '@app-configs';
declare module '@app-components';
