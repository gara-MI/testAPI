FROM node:8

RUN mkdir /src

WORKDIR /src

ADD ./app/package.json /src/package.json

RUN npm install

ADD wait-for-it.sh .

CMD ["node", "app/index.js"]
