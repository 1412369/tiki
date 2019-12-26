import LRU from 'lru-cache';
const options = {
  max: 50,
  maxAge: 1000 * 60 * 60,
};
global.lruCache = new LRU(options);
