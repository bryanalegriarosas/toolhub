FROM php:8.3-fpm

ARG UID=1000
ARG GID=1000

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpq-dev \
    libzip-dev \
    && docker-php-ext-install pdo_pgsql zip

# instalar composer 2.7
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# crear usuario no root
RUN groupadd -g ${GID} laravel \
    && useradd -u ${UID} -g laravel -m laravel

WORKDIR /var/www

RUN chown -R laravel:laravel /var/www

USER laravel