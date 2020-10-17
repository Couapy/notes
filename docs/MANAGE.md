# Project management

A makefile is ready to manage the project.

The project is initialised inside a virtual environment.

Please make sure you installed virtualenv by executing :

```bash
pip install virtualenv
```

## Installation

First, please enable production or development configuration in the `src/project/settings/__init__.py` by uncomment the correct line.

Obviously, yout have to edit the settings of the production if needed.

Then to prepare the project, run the following command : 

```bash
make install
```

## Run dev server

To run the django development server just type into the console :

```bash
make run
```

## Update

When an update is available, please run this :

```bash
make update
```
