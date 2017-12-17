FROM nginx:1.13.7-alpine
LABEL maintainer="Tim Gremplewski <tim.gremplewski@gmail.com>"

COPY dist/ /usr/share/nginx/html
