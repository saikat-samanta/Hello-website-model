//jshint esversion: 6
const fs = require("fs");
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const public_path = path.join(__dirname, "/public");
const views_path = path.join(__dirname, "/template/views");
const partials_path = path.join(__dirname, "/template/partials");

app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.use(express.static(public_path));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/joinus", (req, res) => {
  res.render("joinus");
});
app.get("*", (req, res) => {
  res.send("404 Error Page");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("listing port 3000. visit http://localhost:3000");
});
