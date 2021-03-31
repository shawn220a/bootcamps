const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const passport = require("./config/passport");
const cookieParser = require("cookie-parser");

app.use(morgan("dev"));
app.use(cookieParser());

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./client"));
app.use(passport.initialize());

// Requiring our routes
require("./routes/oauth-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
});
