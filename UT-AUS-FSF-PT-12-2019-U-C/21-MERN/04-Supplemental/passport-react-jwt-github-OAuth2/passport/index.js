const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models');
const jwt = require('jsonwebtoken');

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  async function(accessToken, refreshToken, profile, cb) {
  
  console.log(profile.login);
    
  try {

    let user = await db.User.findOne({githubId: profile.id});

    if(user) {
      return cb(null, user);
    }

    const account = {
      accessToken: accessToken, 
      githubId: profile.id,
      username: profile.username
    };

    const jwtToken = jwt.sign(account, process.env.JWT_SECRET);

    user = await db.User.create({...account, jwtToken});

    console.log(user);
    cb(null, user);

  } catch(erroor) {
    console.log(erroor);
    cb(erroor, false);
  }
}));
  
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    console.log(jwt_payload);
    try {
      const user = await db.User.findOne({accessToken: jwt_payload.accessToken});
    
      if (!user) {
          return done(null, false);
      }

      done(null, user);
    } catch (error) {
      done(error, false);
    }
}));

passport.initialize();

module.exports = passport;