const express = require("express");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));