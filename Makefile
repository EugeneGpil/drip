dev:
	./shell/dev.sh

release:
	cd container &&\
	docker compose stop &&\
	docker compose up --build --remove-orphans --detach &&\
 	docker compose run --rm --user app php composer install --no-interaction &&\
 	docker compose run --rm --user app php php artisan migrate --force --no-interaction &&\
 	docker compose run --rm nodejs_build npm ci &&\
 	docker compose run --rm nodejs_build npm run generate &&\
	docker compose --profile prod up --build --detach

stop:
	cd container && docker compose stop

install-net-tools:
	sudo apt-get install net-tools -y

exec-php:
	cd container && docker compose exec --user www-data php bash

exec-php-app:
	cd container && docker compose exec --user app php bash

composer-install:
	cd container && docker compose run --rm --user app php composer install

ide-helper:
	cd container && docker compose run --rm --user app php php artisan ide-helper:generate &&\
 	docker compose run --rm --user app php php artisan ide-helper:models &&\
 	docker compose run --rm --user app php php artisan ide-helper:meta

exec-nodejs:
	cd container && docker compose exec nodejs bash
