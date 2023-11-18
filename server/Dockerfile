FROM php:8.2-apache

WORKDIR /server

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \ 
        nodejs npm\                      
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install fileinfo 

COPY . .

COPY .env.example .env

RUN sed -i 's/DB_DATABASE=.*/DB_DATABASE=sd/g' .env
RUN sed -i 's/DB_HOST=.*/DB_HOST=mysql/g' .env

RUN npm install

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install 

RUN php artisan key:generate

EXPOSE 8000

ENTRYPOINT php artisan serve --host=0.0.0.0 --port=8000