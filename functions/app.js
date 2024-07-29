require('dotenv').config();

const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const ejs =require("ejs");

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views")); // Use process.cwd() to get the current working directory

app.use(express.static(path.join(process.cwd(), "public"))); // Use process.cwd() for static files

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Additional routes here...

module.exports.handler = serverless(app);
