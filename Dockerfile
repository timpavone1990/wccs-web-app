FROM nginx:alpine
LABEL maintainer="Tim Gremplewski <tim.gremplewski@gmail.com>"

COPY dist/ /usr/share/nginx/html
