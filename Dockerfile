FROM node:12.13.1-stretch
RUN mkdir -p /usr/src/app/mock_service
# Change working directory
WORKDIR /usr/src/app/mock_service

# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Install npm production packages
COPY package.json webpack.common.js webpack.dev-proxy.js webpack.dev-standalone.js webpack.prod.js /usr/src/app/mock_service/
RUN cd /usr/src/app/mock_service; npm install --production
COPY /client /usr/src/app/mock_service/client/
RUN npm install --only=dev; npm run build; npm prune --production

COPY . /usr/src/app/mock_service

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]
