const Mystery = require("../models/Mystery");

module.exports = {
  async store(req, res) {
    let { title, category, mystery, resolution } = req.body;
    title = title.toLowerCase();
    const { user_id } = req.headers;
    if (title == "" || category == "" || mystery == "" || resolution == "") {
      return res.json({ msg: "All fields are required!" });
    }

    const myst = await Mystery.create({
      title,
      category,
      mystery,
      resolution,
      user_id,
    });
    let msg =
      "Sorry, We could not save your mystery. Contact our team for more details.";
    let status = 0;
    if (myst) {
      msg = "Your mystery was successfully saved.";
      status = 1;
    }
    return res.json({ data: myst, msg: msg, status: status });
  },

  async show(req, res) {
    const mystery = await Mystery.find({});
    const item = mystery[Math.floor(Math.random() * mystery.length)];
    return res.json(item);
  },
};
