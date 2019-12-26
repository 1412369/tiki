declare var ENVS: any;
declare namespace NodeJS {
  export interface ProcessEnv {
    ROOT_PATH: string;
  }
  export interface Global {
    shallow: any;
    create: any;
    lruCache: any;
  }
}
