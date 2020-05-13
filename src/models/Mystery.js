const mongoose = require("mongoose");

const MysterySchema = new mongoose.Schema({
  title: String,
  category: String,
  mystery: String,
  resolution: String,
  user_id: String
});

module.exports = mongoose.model("Mystery", MysterySchema);
