FROM node:25-alpine3.22

WORKDIR /frontend

COPY ./ /frontend

RUN npm install
RUN npm run build

CMD ["node", ".output/server/index.mjs"]
