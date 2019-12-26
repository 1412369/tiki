# Tiki home test

At the moment i setup this project, i'm using Nodejs v.12.13.0 LTS. So it would be nice with the project is running with Nodejs v12.13.0
## development
1. Run following command
```
   rm -rf node_modules
   rm -f yarn.lock
   yarn cache clean
   yarn

```

2. Edit file `.env`
```
NODE_ENV = development
PORT=3001
``` 
3. RUN : `yarn dev`

## Build

1. Edit `.env`
```
NODE_ENV = production
PORT=3001
```
2. Run: 
```
# normal build
yarn build
# docker build
docker build -t tiki
```
## Run
- Start with node: `yarn start`
- Start with pm2: `pm2 start pm2.json`
- Start with docker: `docker run -t tiki:latest`

## Live demo assignment here

https://tiki.codefun.dev/
