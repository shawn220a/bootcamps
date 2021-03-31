const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageStoreSchema = new Schema({
  link: String,
  githubId: String
});

const ImageStore = mongoose.model("ImageStore", ImageStoreSchema);

module.exports = ImageStore;
