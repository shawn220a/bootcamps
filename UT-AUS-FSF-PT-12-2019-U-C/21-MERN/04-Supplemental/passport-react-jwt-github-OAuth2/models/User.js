const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  jwtToken: String,
  accessToken: String,
  githubId: String,
  images: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the ImageStore model
      ref: "ImageStore"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
