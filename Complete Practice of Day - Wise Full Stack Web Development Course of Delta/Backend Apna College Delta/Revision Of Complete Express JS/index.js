// Backend Revision of Express JS and Node Js

const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Website k backend ko revise kar rhay hain");
});

app.get("/help", (req, res) => {
  res.send("Website k backend may ye help section hoga !!! ");
});

app.get("/person/:acc/:acc_no", (req, res) => {
  let { acc, acc_no } = req.params;

  console.log({ acc });
  console.log({ acc_no });
  res.send(`You requested for the user , whose name is ${acc} `);
  console.log(`You requested for the user , whose name is ${acc_no}`);
});

// For The Query Selector in express js

app.get("/apple", (req, res) => {
  let { q } = req.query;
  console.log(req.query);
  res.send(`Apple is a fruit ${q}`);
});
