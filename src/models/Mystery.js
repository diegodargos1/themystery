const mongoose = require("mongoose");

const MysterySchema = new mongoose.Schema({
  title: String,
  category: String,
  mystery: String,
  resolution: String,
  user_id: String,
  language: String,
});

module.exports = mongoose.model("Mystery", MysterySchema);
