const passport = require("passport");
const path = require("path");
const userController = require("../controllers/user");

const passportFacebook = (req, res) => {
  passport.authenticate("facebook", { session: false }, (error, user, info) => {
    if (error || !user) {
      console.log(info);
      return res
        .status(401)
        .sendFile(path.join(__dirname, "../client/index.html"));
    }

    userController.facebookOauth(user).then(function (token) {
      // Succesful authentication!
      // Store the generated jwt in the client cookie
      res.cookie("jwt", token);
      res.redirect("/members");
    });
  })(req, res);
};

module.exports = function (app) {
  // Redirect the user to Facebook for authentication.  When complete,
  // Facebook will redirect the user back to the application at
  // /oauth/facebook/callback
  app.get("/oauth/facebook", passportFacebook);

  // Facebook will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.
  app.get("/oauth/facebook/callback", passportFacebook);

  app.get("/oauth/logout", function (req, res) {
    console.log("logging user out");
    req.logout();
    res.clearCookie("jwt");
    res.redirect("/");
  });
};
