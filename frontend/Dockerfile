FROM node:8.12.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install node-gyp -g
RUN export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
RUN npm install

COPY . ./

CMD ["npm", "start"]
