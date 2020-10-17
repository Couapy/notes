# Structure of the project

This file describe the structure of the project.

## deploy

This folder contains the files to setup the project on a web server with a configuration example.

For example for an apache server :

```bash
cp deploy/apache-example.conf /etc/apache2/sites-available/my-site.conf
vi my-site.conf
a2ensite my-site.conf
```

## docs

This folder contains all files you can need to start, developing, maintaining or deploying the project.

## src

This is the source folder of the project.

## var

In this folder you can find the collected files for this instance of project, like : database, files uploaded, and files collected.
