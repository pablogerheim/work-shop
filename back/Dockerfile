FROM node:alpine
WORKDIR /app/back
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start"]
