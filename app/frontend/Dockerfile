FROM node:current-alpine3.19

WORKDIR /webapp
COPY . .
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start", "--", "0.0.0.0"]
