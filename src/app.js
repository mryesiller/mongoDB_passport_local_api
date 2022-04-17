const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");

//Routes
const homeRoutes = require("./routes/home.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

//Parser setups
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Handle Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

//Passport Setups
app.use(passport.initialize());
app.use(passport.session());

//Check local user
app.get("*", function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

//Handle Routes
app.use("/", homeRoutes);
app.use("/users", userRoutes);

//Error middleware
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
