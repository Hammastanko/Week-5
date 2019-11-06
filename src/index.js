const express = require("express");

const app = express();
/*
app.get("/", (req, res) => {
  res.send("hellotttte test Eero Peltola 2");
});
*/

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
