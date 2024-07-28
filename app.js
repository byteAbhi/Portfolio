require('dotenv').config();

const express = require("express");
const app = express();
// const mysql = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

// Set the public directory for static files
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to render the index page
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
//port number setup
const PORT = process.env.PORT || 3000;
// Close the connection pool when the server is shutting down
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Event handler for when the server is shutting down
server.on("close", () => {
  // Close the connection pool
  pool.end((err) => {
    if (err) {
      console.error("Error closing connection pool:", err);
      return;
    }
    console.log("Connection pool closed.");
  });
});