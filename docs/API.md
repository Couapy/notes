# API

## Introduction

This is a API REST based on the framework [djangorestframework](https://www.django-rest-framework.org/).

## Links and methods

| Links                                                | Methods                |
| ---------------------------------------------------- | ---------------------- |
| /api/                                                | GET                    |
| /api/user/                                           | GET, PUT, POST, DELETE |
| /api/user/profile/                                   | GET, PUT               |
| /api/user/notespace/                                 | GET                    |
| /api/user/notesbooks/                                | GET, POST              |
| /api/user/notesbooks/\<int:id\>/                     | GET, PUT, DELETE       |
| /api/user/listnotes/                                 | GET, POST              |
| /api/user/listnotes/\<int:id\>/                      | GET, PUT, DELETE       |
| /api/user/listnotes/\<int:id\>/items/                | GET, POST              |
| /api/user/listnotes/\<int:id\>/items/\<int:iditem\>/ | GET, PUT, DELETE       |
| /api/user/notes/                                     | GET, POST              |
| /api/user/notes/\<int:id\>/                          | GET, PUT, DELETE       |
