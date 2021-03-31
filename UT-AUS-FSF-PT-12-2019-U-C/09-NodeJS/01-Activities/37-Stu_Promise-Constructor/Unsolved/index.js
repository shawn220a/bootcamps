function waitFor(seconds, cb) {
  if (isNaN(seconds) || seconds < 1) {
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function() {
    cb(null, "Success!");
  }, seconds * 1000);
}


waitFor(2, function(err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
})
