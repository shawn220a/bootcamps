const db = require("../models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];

/*
  Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: 
    iss (issuer), - claim identifies the principal that issued the JWT.
    sub (subject), - claim identifies the principal that is the subject of the JWT. We"ll use the ID provided by facebook.
    iat (issued at) - claim identifies the time at which the JWT was issued.
    aud (audience) - claim identifies the recipients that the JWT is intended for.
    exp (expiration time) - claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing.
*/

signToken = (user) => {
  return jwt.sign(
    {
      iss: config.jwt.issuer,
      sub: user.providerId,
      iat: new Date().getTime(),
      aud: user.email,
      exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
    },
    config.jwt.secret
  );
};

module.exports = {
  findAll: (req, res) => {
    db.User.findAll()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByProviderId: (providerId) => {
    return db.User.findOne({
      where: {
        providerId: {
          [Op.eq]: providerId,
        },
      },
    })
      .then((dbModel) => dbModel)
      .catch((err) => err);
  },
  create: (newUser) => {
    return db.User.create(newUser)
      .then((dbModel) => dbModel)
      .catch((err) => err);
  },
  facebookOauth: async (user) => {
    return await signToken(user);
  },
};
