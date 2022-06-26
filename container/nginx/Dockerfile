ARG NGINX_VERSION=1.20
FROM nginx:${NGINX_VERSION}

COPY default.conf /etc/nginx/conf.d/default.conf

RUN apt-get update &&\
    apt-get install nano -y &&\
    mkdir /var/www &&\
    touch /var/www/.barshrc &&\
    echo "umask 012\n" >> /var/www/.bashrc
