# SQL Schema

In this activity, you will create a MySQL database and tables.

## Instructions

* In the [Unsolved](Unsolved/) folder, create a `schema.sql` file for a database named `books_db`.

    * Add these commands to the top of the file to create the database:

    ```sql
    DROP DATABASE IF EXISTS books_db;
    CREATE DATABASE books_db;
    USE books_db;
    ```

    * Create two tables, one for `books` and one for `authors`. 

        * In the `books` table, add columns for the following:

            * `id`

            * `authorId` 

            * `title`

            * `PRIMARY KEY`

        * In the `authors` table, add columns for the following: 

            * `id`

            * `firstName`

            * `lastName`

            * `PRIMARY KEY`

* To initiate the MySQL command line, type: `mysql -u root -p` in your command line and then your MySQL password. Be sure your MySQL Server is running!

* To execute the `schema.sql` file, type into the MySQL command line: `source schema.sql`

* To check if everything was done correctly, type `show databases;` and `show tables;` in the MySQL command line. Don't forget the semicolon!

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* You may need to consult the MySQL documentation on [creating a table](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html).