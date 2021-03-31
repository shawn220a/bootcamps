const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(err => {
        console.log(`User not found`);
        process.exit(1);
      });
  }
};

module.exports = api;
