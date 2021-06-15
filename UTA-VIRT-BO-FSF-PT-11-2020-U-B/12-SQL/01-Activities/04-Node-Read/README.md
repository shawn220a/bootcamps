# Node Read

In this activity, you will use a npm package to connect to a MySQL database and print all of the rows of the database's table. 

## Instructions 

* Navigate to the [Unsolved](Unsolved/) folder and set up the database:

  * Initialize the MySQL command line: `mysql -u root -p` and your MySQL password.

  * Run the `schema.sql` and `seeds.sql` files from the MySQL command line to create and populate the `iceCreamDB` database. Exit the MySQL command line when done.

* Open the [server.js](Unsolved/server.js) file and do the following:

  * Update the `user` and `password` with your MySQL username and password.

  * In the `afterConnection` function, write a simple query that will `SELECT` everything from the `products` table and log the results in the console.

* To check if everything was done correctly, run `npm install` and `npm start` in the command line.

## Hint(s)

* You may need to consult the documentation for the [mysql2 package](https://www.npmjs.com/package/mysql2).