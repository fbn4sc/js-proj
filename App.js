const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("js-proj");
});

app.listen(3000, () => {
  console.log("Servidor online.");
});
