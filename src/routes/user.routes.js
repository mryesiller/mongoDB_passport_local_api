const express = require("express");
const router = express.Router();
const passport = require("../services/passport.service");

const User = require("../models/user.model");

const { getLogout, register } = require("../controllers/user");

router.post("/register", register);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    successRedirect: "/",
  }),
  function (req, res) {
    res.send({ message: "Login success" });
  }
);

router.get("/logout", getLogout);

router.get("/login", (req, res) => {
  res.status(200).send({ status: 200, message: "Login page" });
});

module.exports = router;
