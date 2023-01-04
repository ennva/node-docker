FROM node:14.15.4 as base
#ENV NODE_ENV=production

WORKDIR /app

#COPY ["package.json", "package-lock.json", "./"]
COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
RUN ["npm", "run", "test"] 

FROM base as prod
RUN npm ci --production
COPY . . 
CMD ["node", "server.js"]
