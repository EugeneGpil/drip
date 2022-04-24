start:
	./shell/start.sh

stop:
	cd container && docker-compose stop

install-net-tools:
	sudo apt-get install net-tools -y
