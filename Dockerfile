FROM node:12.13.0 as builder
WORKDIR /root/src/app
COPY . .
RUN yarn
RUN echo NODE_ENV=production >>.env&&\
    echo PORT=3002 >> .env

RUN yarn build
RUN rm -rf node_modules &&\
    yarn --production

FROM node:12.13.0-alpine
WORKDIR /root/src/app
COPY --from=builder /root/src/app .
ENTRYPOINT "yarn" "start"
EXPOSE 3002


