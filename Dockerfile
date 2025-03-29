FROM node:23-alpine3.20

WORKDIR /app

COPY package*.json ./ 

RUN npm install --force

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]
