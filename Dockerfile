FROM "dunglas/frankenphp"

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN install-php-extensions \
    pdo_mysql \
    gd \
    intl \
    zip \
    opcache \
    pcntl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs
RUN chown -R www-data:www-data /app/public
RUN chmod -R 775 /app/public

WORKDIR /app
COPY ./. /app/

# Install Composer
#RUN composer require laravel/octane --ignore-platform-reqs
RUN php artisan octane:install --server=frankenphp
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --ignore-platform-reqs
#RUN npm install --force
# RUN npm run build

