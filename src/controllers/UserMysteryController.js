const Mystery = require("../models/Mystery");

module.exports = {
  async index(req, res) {
    const { user_id } = req.query;

    if (user_id == "") {
      return res.json({
        status: 0,
        msg: "Error X1337, please contact us to report this error."
      });
    }

    const cards = await Mystery.find({ user_id });
    return res.json({ data: cards, status: 1 });
  }
};
