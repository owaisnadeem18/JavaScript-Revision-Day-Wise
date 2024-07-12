const express = require("express");

const app = express();

let port = 3000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

// Now we have to discuss about path parameters in express js

app.get("/:name/:identity", (req, res) => {
  let { name, identity } = req.params;
  console.log(name);
  console.log(identity);
  //   res.send(`<h1> Hello ! ${name} </h1> `);
  // we can also send it using a variable inside it
  let variable = `<h5>${name}</h5>`;
  res.send(variable);
});

// Let's Learn about query selector in Express JS

app.get("/query_check", (req, res) => {
  let { q } = req.query;

  if (!q) {
    res.send(`<h1>Query is empty</h1>`);
  }
  res.send(` Your Query is = ${q}`);
  console.log(`${q}`);
});
