FROM node:16-alpine
WORKDIR /opt/app
COPY . /opt/app
RUN npm install
ARG ENV
RUN npm run build
RUN npm prune --production
EXPOSE 3000
CMD ["npm", "start"]
