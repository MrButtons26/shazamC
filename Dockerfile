FROM node:22-alpine

WORKDIR /usr/app

COPY  package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
