# SQL Seeds 

In this activity, you will populate the `books_db` database with data.

## Instructions

* In the [Unsolved](Unsolved/) folder, create a `seeds.sql` file.

  * Insert the following names, in this order, into their corresponding columns in `authors`:

    1. Jane Austen
    
    2. Mark Twain
    
    3. Lewis Carroll
    
    4. Andre Asselin

  * Insert the following titles and `authorId` into their corresponding columns in `books`:

    * 'Pride and Prejudice', 1

    * 'Emma', 1

    * 'The Adventures of Tom Sawyer', 2

    * 'Adventures of Huckleberry Finn', 2

    * 'Alice''s Adventures in Wonderland', 3

    * 'Dracula', null 

* To initiate the MySQL command line, type: `mysql -u root -p` in your command line and then your MySQL password. Be sure your MySQL Server is running!

* To set up the database, type into the MySQL command line: `source schema.sql`

* To seed the database, type into the MySQL command line: `source seeds.sql`

* To check if everything was done correctly, type into the MySQL command line: `SELECT * FROM authors;` or `SELECT * FROM books;`

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* You may need to consult the MySQL documentation on [loading data into a table](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html).