FROM node:21-alpine
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173
ENTRYPOINT npm run dev