// para que arquivos EJS executem
// precisamos colocá-los dentro de
// uma pasta chamada views 
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index",)
})

app.get("/sobr", (req, res) => {
  res.render("about",)
})

app.listen(8080);