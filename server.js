// para que arquivos EJS executem
// precisamos colocá-los dentro de
// uma pasta chamada views 
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "D",
      message: "Desenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "EJS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito fácil de usar"
    },
    {
      title: "A",
      message: "Amorzinho"
    },
    {
      title: "I",
      message: "Install EJS"
    },
    {
      title: "S",
      message: "Sintaxe simples"
    }
  ];
  res.render("pages/index",{
    qualitys: items
  })
})

app.get("/sobre", (req, res) => {
  res.render("pages/about",)
})

app.listen(8080);