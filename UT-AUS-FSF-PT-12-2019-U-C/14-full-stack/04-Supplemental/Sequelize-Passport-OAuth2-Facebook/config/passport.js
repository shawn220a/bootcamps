'use strict';
const env = process.env.NODE_ENV || 'development';
const config = require("./config.js")[env];
const userController = require("../controllers/user");
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use("facebook", new FacebookStrategy(config.fb,
    async (accessToken, refreshToken, profile, done) => {
    // We are attempting to do the following
    // 1) Find a user in the db using profile.id
    //      2) If the user is found, return the data using the done() callback
    //      3) Otherwise the user is not found, create new user in the db, and return the data using the done() callback

    try {
        // console.log(profile);
        // console.log(accessToken);
        // console.log(refreshToken);

        // Find a user in the db using profile.id
        const existingUser = await userController.findByProviderId(profile.id);

        // If the user is found, return the data using the done() callback
        if(existingUser) {
            // console.log("user already exist in database");
            return done(null, existingUser);
        }

        // Otherwise, the user is not found, create new user in the db, and return the data using the done() callback
        const newUser = {
            provider: "facebook",
            providerId: profile.id,
            name: profile.displayName || '',
            email: profile.emails[0].value || '',
            profilePicture: profile.photos[0].value || ''
        };

        // console.log("user doesn't exist in database, creating new one");
        // console.log(newUser);

        done(null, await userController.create(newUser));

    } catch (error) {
        done(error, false, error.message);
    }
}));

const opts = {}
opts.jwtFromRequest = opts.jwtFromRequest = function(req) {
    if (req && req.headers['Authorization']) { 
        return req.headers['Authorization'];
    } else if (req && req.cookies) {
        return req.cookies.jwt;
    }   
    return null;
};
opts.secretOrKey = config.jwt.secret;
opts.issuer = config.jwt.issuer;

passport.use(new JWTStrategy(opts, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await userController.findByProviderId(payload.sub);

        // If user doesn't exist, INVALIDATE
        if(!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false, error.message);
    }
}));

// Exporting our configured passport
module.exports = passport;