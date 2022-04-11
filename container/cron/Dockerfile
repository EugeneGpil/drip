FROM ubuntu:20.04

COPY crontab /etc/cron.d/laravel-cron

ARG PHP_VERSION=8.1
RUN chmod 0644 /etc/cron.d/laravel-cron &&\
    touch /var/log/cron.log &&\
    apt-get update &&\
    apt-get install cron -y &&\
    mkdir /var/www &&\
    touch /var/www/.barshrc &&\
    echo "umask 012\n" >> /var/www/.bashrc &&\
    apt-get install software-properties-common -y &&\
    add-apt-repository ppa:ondrej/php -y &&\
    apt-get update &&\
    apt-get install\
        php${PHP_VERSION}\
        php${PHP_VERSION}-cli\
        php${PHP_VERSION}-common\
        php${PHP_VERSION}-opcache\
        php${PHP_VERSION}-mysql\
        php${PHP_VERSION}-mbstring\
        php${PHP_VERSION}-zip\
        php${PHP_VERSION}-gd\
        php${PHP_VERSION}-fpm\
        php${PHP_VERSION}-xml\
        php${PHP_VERSION}-curl\
        php${PHP_VERSION}-dev\
        php${PHP_VERSION}-intl\
        php${PHP_VERSION}-mongodb -y
