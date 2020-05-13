const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, pass } = req.body;
    if (email == "" || pass == "") {
      return res.json("Email and Password are required!");
    }
    let user = await User.findOne({ email, pass });
    if (!user) {
      return res.json("Wrong email or password ");
    }

    return res.json(user);
  }
};
