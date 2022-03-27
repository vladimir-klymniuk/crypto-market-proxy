FROM node:latest

ADD ../project /var/www/project
COPY docker ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]