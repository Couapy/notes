# API

## Introduction

This is a API REST based on the framework [djangorestframework](https://www.django-rest-framework.org/).

## Links and methods

| Links                                   | Methods          |
| --------------------------------------- | ---------------- |
| /api/                                   | GET              |
| /api/user/                              | GET, PUT         |
| /api/user/profile/                      | GET, PUT         |
| /api/user/notespace/                    | GET              |
| /api/user/notesbooks/                   | GET, POST        |
| /api/user/notesbooks/\<id\>/            | GET, PUT, DELETE |
| /api/listnotes/                         | GET, POST        |
| /api/listnotes/\<id\>/                  | GET, PUT, DELETE |
| /api/listnotes/\<id\>/items/            | GET, POST        |
| /api/listnotes/\<id\>/items/\<iditem\>/ | GET, PUT, DELETE |
| /api/notes/                             | GET, POST        |
| /api/notes/\<id\>/                      | GET, PUT, DELETE |
