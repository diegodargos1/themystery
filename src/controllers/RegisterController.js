const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, name, pass, confirmPass } = req.body;
    if (email == "" || pass == "" || confirmPass == "" || name == "") {
      return res.json("All fields are required!");
    }

    if (pass != confirmPass) {
      return res.json("Confirm your password.");
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.json("An user with this email already exist.");
    }

    user = await User.create({ email, name, pass });

    return res.json(user);
  }
};
