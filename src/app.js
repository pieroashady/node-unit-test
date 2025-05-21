const express = require("express");
const { add } = require("./utils/calculation");
const app = express();

app.get("/hello", (req, res) => {
  const addSalary = add(10, 20);
  const header = req.headers["x-huda"];

  res.json({ message: `Hello, world! This is your salary: ${addSalary} header ${header}` });
});

module.exports = app;
