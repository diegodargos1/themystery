const Rating = require("../models/Rating");

module.exports = {
  async store(req, res) {
    let { mystery_id, rating } = req.body;

    const { user_id } = req.headers;
    if (mystery_id == "" || rating == "") {
      return res.json("Why don't you rate this mystery?");
    }

    let rate = await Rating.findOne({ mystery_id, user_id });
    if (rate) {
      rate.rating = rating;
      await rate.save();
    } else {
      rate = await Rating.create({
        mystery_id,
        rating,
        user_id,
      });
    }
    let msg =
      "Sorry, We could not save your rating. Contact our team for more details.";
    let status = 0;
    if (rate) {
      msg = "Thank you for rating this mystery.";
      status = 1;
    }
    return res.json({ data: rate, msg: msg, status: status });
  },

  async show(req, res) {
    const { mystery_id } = req.query;
    const rateList = await Rating.find({ mystery_id: mystery_id });
    let aggregatorOpts = [
      { $match: { mystery_id: mystery_id } },
      {
        $group: {
          _id: { rating: "$rating" },
          count: { $sum: 1 },
        },
      },
    ];
    const rate = await Rating.aggregate(aggregatorOpts).exec();

    aggregatorOpts = [
      { $match: { mystery_id: mystery_id } },
      {
        $group: {
          _id: { mystery_id: "$mystery_id" },
          count: { $sum: 1 },
        },
      },
    ];
    const total = await Rating.aggregate(aggregatorOpts).exec();
    let ratingSum = 0;
    rate.forEach((element) => {
      ratingSum = ratingSum + element._id.rating * element.count;
    });
    //const item = mystery[Math.floor(Math.random() * mystery.length)];
    ratingSum = ratingSum / total[0].count;
    return res.json(ratingSum);
  },
};
