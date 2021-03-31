module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    provider: {
      type: DataTypes.ENUM,
      values: ["facebook", "google"],
      required: true,
    },
    providerId: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    oauthExpiresAt: DataTypes.DATE,
  });
  return User;
};
