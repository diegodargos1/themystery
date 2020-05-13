const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  mystery_id: String,
  rating: String,
  user_id: String,
});

module.exports = mongoose.model("Rating", RatingSchema);
