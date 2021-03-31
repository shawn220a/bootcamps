function waitFor(seconds) {
  return new Promise(function(resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err);
  });
