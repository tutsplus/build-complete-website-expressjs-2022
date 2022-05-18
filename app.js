const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const lessMiddleware = require("less-middleware");
const logger = require("morgan");
const config = require("./config")();
const admin = require("./routes/admin");
const indexRouter = require("./routes/index");
const blog = require("./controllers/Blog");
const page = require("./controllers/Page");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.all("/", function (req, res, next) {
  home.run(req, res, next);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.all("/admin*", function (req, res, next) {
  admin.run(req, res, next);
});
app.all("/blog/:id", function (req, res, next) {
  Blog.runArticle(req, res, next);
});
app.all("/blog", function (req, res, next) {
  Blog.run(req, res, next);
});
app.all("/services", function (req, res, next) {
  Page.run("services", req, res, next);
});
app.all("/careers", function (req, res, next) {
  Page.run("careers", req, res, next);
});
app.all("/contacts", function (req, res, next) {
  Page.run("contacts", req, res, next);
});
process.env.PORT = config.port;
module.exports = app;
