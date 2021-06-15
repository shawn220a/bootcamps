const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '',
  database: 'ice_creamDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  createProduct();
});

createProduct = () => {
  console.log('Inserting a new product...\n');
  const query = connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: 'Rocky Road',
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' product inserted!\n');
      // Call updateProduct() AFTER the INSERT completes
      updateProduct();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
};

updateProduct = () => {
  console.log('Updating all Rocky Road quantities...\n');
  // Update the quantity for 'Rocky Road' to 100
  //
  // YOUR CODE HERE
  //
  // Include the callback function to catch any errors,
  // log how many products were updated,
  // and call deleteProduct() AFTER the UPDATE completes
  //
  // YOUR CODE HERE
  //

  // logs the actual query being run
  console.log(query.sql);
};

deleteProduct = () => {
  console.log('Deleting all strawberry ice cream...\n');
  // Delete the flavor 'strawberry'
  //
  // YOUR CODE HERE
  //
  // Include the callback function to catch any errors,
  // log how many products were deleted,
  // and call the readProducts() AFTER the DELETE completes
  //
  // YOUR CODE HERE
  //

  // logs the actual query being run
  console.log(query.sql);
};

readProducts = () => {
  console.log('Selecting all products...\n');
  // Select all of the data from the 'products' table
  //
  // YOUR CODE HERE
  //
  // Include the callback function to catch any errors,
  // log all results of the SELECT statement,
  // and end the connection
  //
  // YOUR CODE HERE
  //
};
