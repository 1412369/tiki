# Tiki home test

## development

1. Run following command
   rm -rf node_modules
   rm -f yarn.lock
   yarn cache clean
   yarn
2. Change NODE_ENV === 'development' in file .env
3. RUN : yarn dev

## Build

1. Change NODE_ENV === 'production' in file .env
2. Run: yarn build
   3.1 Start with node: yarn start
   3.2 Start with pm2: pm2 start pm2.json

## build with Docker

1. Build: docker build -t tiki
2. Run: docker run -t tiki:latest

## Live demo assignment here

https://tiki.codefun.dev/
