// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});
