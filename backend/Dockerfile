FROM node:8.12.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . ./

CMD sleep 10 && ((sleep 5 && npm run mock) &) && npm start
