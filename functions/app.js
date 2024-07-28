require('dotenv').config();

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("portfolio");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/skill", (req, res) => {
  res.render("skill");
});

app.get("/project", (req, res) => {
  res.render("project");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

module.exports.handler = serverless(app);
