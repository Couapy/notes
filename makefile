all:
	@echo "Welcome. You can use the help with 'make help'."

install:
	@echo "Silent mode enable. Installation in progress ..."

	@virtualenv .venv
	@echo "Virtual environnement '.venv' is enabled"

	@.venv/bin/pip install -r requirements.txt
	@echo "Dependencies required are installed."

	@mkdir -p src/apps
	@mkdir -p var

	@.venv/bin/python src/manage.py collectstatic --clear --force-color --noinput
	@echo "Static files are collected."

	@.venv/bin/python src/manage.py migrate
	@echo "Database migration done."

	@echo "Installation finished."

update:
	@.venv/bin/pip install -r requirements.txt
	@.venv/bin/python src/manage.py migrate

run:
	@.venv/bin/python src/manage.py runserver

test:
	@.venv/bin/python src/manage.py test

migrations:
	@.venv/bin/python src/manage.py makemigrations

migrate:
	@.venv/bin/python src/manage.py migrate

clean:
	@rm -rf .venv var

help:
	@echo "This is the help, the following commands are availables :"
	@echo "    install - Install the project"
	@echo "    update - Update the project"
	@echo "    run - Run development server"
	@echo "    clean - Clean the project (virtualenv and var folders)"
	@echo "    help - Show this help"
