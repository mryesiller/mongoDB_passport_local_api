const express = require("express");
const router = express.Router();

const { authCheck } = require("../middlewares/auth");

router.get("/", authCheck, (req, res) => {
  res.status(200).json({ status: 200, message: "home page" });
});

module.exports = router;
