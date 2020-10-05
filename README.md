## Getting started

Enter the `nought` root directory.

Start the server with `nodemon server/index.js`

## Postgres

For this project, we work in a database called `nought`.

Start interacting with the database through the command line, start a session with `psql -d nought`

`\l` = list all databases in postgresql
`\c` = move inside a database
`\dt` = show tables in database

`CREATE DATABASE nought;` = creates a database called 'nought'
`CREATE TABLE todo;` = creates a table called 'todo'

We also defined a schema (defined in creation, see `database.sql`)

We built a RESTful API for the database with add, list, update, and delete commands.
