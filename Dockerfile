FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev nodejs npm \
    && docker-php-ext-install pdo pdo_pgsql zip

RUN a2enmod rewrite

COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

COPY . /var/www/html

WORKDIR /var/www/html

RUN composer install --optimize-autoloader --no-dev

#Migraciones + seeder

RUN npm install && npm run build

RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /var/www/html/storage \
&& chown -R www-data:www-data /var/www/html/bootstrap/cache

EXPOSE 80

CMD php artisan migrate --force && apache2-foreground

CMD php artisan sitemap:generate && apache2-foreground
