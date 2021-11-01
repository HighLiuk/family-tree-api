FROM node:16-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV production

EXPOSE 4000

CMD [ "npm", "run", "start" ]
