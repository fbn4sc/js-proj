const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "pug");

app.use(express.static("./"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Products", (req, res) => {
  res.render("./Products/ProductsListPage");
});

app.get("/Offers", (req, res) => {
  res.render("./Offers/OffersListPage");
});

app.listen(3000, () => {
  console.log("Servidor online.");
});
