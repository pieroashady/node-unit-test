const express = require("express");
const { add } = require("./utils/calculation");
const app = express();

app.get("/hello", (req, res) => {
  const addSalary = add(10, 20);
  res.json({ message: `Hello, world! This is your salary: ${addSalary}` });
});

module.exports = app;
