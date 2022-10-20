# pull the base image
FROM node:18.10-alpine3.15

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock  ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]