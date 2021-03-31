var fs = require("fs");
var UserSearch = require("UserSearch.js");
var moment = require("moment");

var WeatherAdmin = function() {
  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(data, error) {
      console.log(data);
    });
  };

  this.newUserSearch = function(name, location) {
    var newUserSearch = new UserSearch(name, location);
    var logTxt =
      "\nName: " +
      newUserSearch.name +
      " Location: " +
      newUserSearch.location +
      " Date: " +
      moment(newUserSearch.date).format("MM-DD-YYYY");

    fs.appendFile("log.txt", "utf-8", logTxt, (err) => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
