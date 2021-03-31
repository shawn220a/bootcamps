var fs = require("fs");

// we add a newline character to the command line argument
fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

  if (err) {
    console.log(err);
  }
  else {
    console.log("Commit logged!");
  }

});
