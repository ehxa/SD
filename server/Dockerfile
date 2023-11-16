FROM php:8.2-apache

WORKDIR /server

COPY . .

COPY .env.example .env

RUN sed -i 's/DB_DATABASE=.*/DB_DATABASE=sd/g' .env

COPY Dockerfile.mysql /Dockerfile.mysql

RUN apt-get update

RUN apt-get install -y --fix-missing nodejs npm libpng-dev zlib1g-dev libjpeg-dev libfreetype6-dev && \
    rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install fileinfo 

RUN npm install

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install 

#RUN php artisan migrate --seed

EXPOSE 8000

ENTRYPOINT php artisan serve