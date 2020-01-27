FROM node:12.13.1-stretch
RUN mkdir -p /usr/src/app
# Change working directory
WORKDIR /usr/src/app

# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Install npm production packages
COPY package.json webpack.common.js webpack.dev-proxy.js webpack.dev-standalone.js webpack.prod.js /usr/src/app
RUN cd /usr/src/app; npm install --production
COPY /client /usr/src/app/client/
RUN npm install --only=dev; npm run build; npm prune --production

COPY . /usr/src/app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]
