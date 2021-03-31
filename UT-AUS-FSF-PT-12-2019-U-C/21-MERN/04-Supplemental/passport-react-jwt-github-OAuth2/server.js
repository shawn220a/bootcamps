require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passport_auth_db", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
