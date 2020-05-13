const Mystery = require("../models/Mystery");

module.exports = {
  async store(req, res) {
    const { _id } = req.body;
    const card = await Mystery.find({ _id });
    return res.json({ card });
  },

  async index(req, res) {
    const { title, category } = req.query;
    if (title == "" && category == "") {
      return res.json({
        status: 0,
        msg: "Please inform a title or a category."
      });
    }
    let query = {};
    if (title) {
      const re = new RegExp(title.toLowerCase());
      query.title = re;
    }
    if (category) {
      query.category = category;
    }

    const cards = await Mystery.find(query).limit(5);
    return res.json({ data: cards, status: 1 });
  }
};
