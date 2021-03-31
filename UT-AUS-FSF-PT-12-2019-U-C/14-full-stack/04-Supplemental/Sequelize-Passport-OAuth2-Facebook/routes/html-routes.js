// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function (app) {
  app.get("/", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });

  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../client/members.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });
};
