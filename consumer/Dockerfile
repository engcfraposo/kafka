FROM node:lts-alpine3.16 as production

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV production

RUN apk update && apk upgrade && \
  apk add --no-cache bash
RUN npm install -g @nestjs/cli@8.0.0

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json /app/
RUN npm install
ADD . /app

RUN npm run build

CMD ["node", "dist/main"]