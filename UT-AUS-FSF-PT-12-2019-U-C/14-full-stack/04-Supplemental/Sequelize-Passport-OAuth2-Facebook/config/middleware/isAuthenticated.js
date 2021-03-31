// This is middleware for restricting routes a user is not allowed to visit if not logged in
const passport = require("passport");
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error || !user) {
      console.log("UNAUTHORIZED", error, user);
      return res
        .status(401)
        .sendFile(path.join(__dirname, "../../client/index.html"));
    }

    req.user = user;
    next();
  })(req, res, next);
};
