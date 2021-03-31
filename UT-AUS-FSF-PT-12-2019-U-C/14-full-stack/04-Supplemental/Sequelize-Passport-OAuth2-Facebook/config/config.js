appName = require("../package.json").name;
module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "passport_oauth_demo",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
    jwt: {
      secret: process.env.JWT_SECRET,
      issuer: appName,
      audience: "",
    },
    fb: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CLIENT_CALLBACK_URL,
      profileFields: ["id", "displayName", "photos", "email"],
    }
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    jwt: {
      secret: "mysecrettosignjwt",
      issuer: appName,
      audience: "",
    },
    fb: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CLIENT_CALLBACK_URL,
      profileFields: ["id", "displayName", "photos", "email"],
    }
  },
};
