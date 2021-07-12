FROM node:12-stretch as builder

RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install node-sass
RUN npm install && npm run build

FROM nginx:mainline

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
