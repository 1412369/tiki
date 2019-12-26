FROM node:12.13.0 as builder
WORKDIR /root/src/app
COPY . .
RUN yarn
RUN echo NODE_ENV=production >>.env&&\
    echo PORT=3001 >> .env &&\
    echo PORT=3001 >> .env &&\
    echo DEV_TOOL=true >> .env &&\
    echo APP_DOMAIN=https://shopback.codefun.dev >> .env &&\
    echo API_DOMAIN=https://shopback.codefun.dev >> .env &&\
    echo CDN_DOMAIN=https://shopback.codefun.dev >> .env &&\
    echo ENABLE_CACHE=true >> .env

RUN yarn build
RUN rm -rf node_modules &&\
    yarn --production

FROM node:12.13.0-alpine
WORKDIR /root/src/app
COPY --from=builder /root/src/app .
ENTRYPOINT "node" "start"
EXPOSE 3001


