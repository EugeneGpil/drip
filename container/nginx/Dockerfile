ARG NGINX_VERSION=1.20
FROM nginx:${NGINX_VERSION}

ENV DEBIAN_FRONTEND=noninteractive

COPY default_dev.conf /tmp/default_dev.conf
COPY default_prod.conf /tmp/default_prod.conf

ARG ENV=production
RUN if [ "$ENV" = "production" ] ; then \
        cp /tmp/default_prod.conf /etc/nginx/conf.d/default.conf \
    ; else \
        cp /tmp/default_dev.conf /etc/nginx/conf.d/default.conf \
    ; fi &&\
    apt-get update &&\
    apt-get install nano -y &&\
    mkdir /var/www &&\
    touch /var/www/.barshrc &&\
    echo "umask 012\n" >> /var/www/.bashrc
