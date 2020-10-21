all:
	@echo "Welcome. You can use the help with 'make help'."

install:
	@echo "Silent mode enable. Installation in progress ..."

	yarn --cwd src/apps/frontend
	# npm install --prefix src/apps/frontend

	@virtualenv .venv
	@echo "Virtual environnement '.venv' is enabled"

	@.venv/bin/pip install -r requirements.txt
	@echo "Dependencies required are installed."

	@mkdir -p src/apps
	@mkdir -p var

	@.venv/bin/python src/manage.py collectstatic
	@echo "Static files are collected."

	@.venv/bin/python src/manage.py migrate
	@echo "Database migration done."

	@echo "Installation finished."

update:
	@.venv/bin/python src/manage.py migrate

install_packages:
	yarn --cwd src/apps/frontend
	# npm install --prefix src/apps/frontend

run:
	@.venv/bin/python src/manage.py runserver

build_run:
	yarn --cwd src/apps/frontend build
	# npm --prefix src/apps/frontend build
	@.venv/bin/python src/manage.py runserver

clean:
	@rm -rf .venv var

front_start_firefox:
	yarn --cwd src/apps/frontend start-firefox
	# npm --prefix src/apps/frontend start-firefox

help:
	@echo "This is the help, the following commands are availables:"
	@echo "    install - Install the project"
	@echo "    update - Update the project"
	@echo "    install_packages - Install/Update node_modules"
	@echo "    run - Run development server"
	@echo "    build_run - Build React render & Run development server"
	@echo "    clean - Clean the project (virtualenv and var folders)"
	@echo "    help - Show this help"
