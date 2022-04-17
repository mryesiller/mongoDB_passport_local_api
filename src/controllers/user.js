const passport = require("../services/passport.service");
const User = require("../models/user.model");

module.exports.register = function (req, res) {
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  User.createUser(newUser, (err, user) => {
    if (err) throw err;
    console.log(user);
  });

  res.status(201).json({
    status: 201,
    message: "User created",
  });
};

module.exports.getLogout = function (req, res) {
  req.logout();
  res.status(200).json({ status: 200, message: "logout success" });
};
