dev:
	./shell/dev.sh

release:
	cd container &&\
	docker compose build &&\
	docker compose stop &&\
	docker compose --profile prod up --build --remove-orphans --detach &&\
 	docker compose run --rm --user app php composer install --no-interaction &&\
 	docker compose run --rm --user app php php artisan migrate --force --no-interaction &&\
 	docker compose run --rm nodejs npm ci &&\
 	docker compose run --rm nodejs npm run generate

prod:
	cd container &&\
	docker compose --profile prod up --build --remove-orphans --detach

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
	cd container && docker compose exec nodejs_dev bash

# If the first argument is "npm"...
ifeq (npm,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

# Run npm with your args
npm:
	cd container && docker-compose run --rm nodejs_dev npm $(RUN_ARGS)
