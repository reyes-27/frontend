FROM node:22-slim

EXPOSE 5173
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN yarn install --silent
COPY . /usr/src/app/
RUN yarn build

# CMD ["yarn", "dev", "--host"]