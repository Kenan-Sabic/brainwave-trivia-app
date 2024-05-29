FROM node:18.17.0-alpine



WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 8000

ENV NODE_ENV=production

CMD ["node", "index.js"]