// const express = require("express");

// const app = express();

// let port = 3001;

// app.listen(port, () => {
//   console.log(`Port is listening on ${port}`);
// });

// // the use case of app.use is about sending requests to our server

// app.use((req, res) => {
//   console.log("request received");
//   // res.send("This is a response "); // we can also pass the object inside it

//   res.send({ myName: "owais Nadeem", age: 23 });
// });

const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => { // app.use requests ko bhejta hay humaray pass

//   console.log("request received");
//   res.send("Hello ! Response has been sent");
// });

// ------------------- Routing In Express JS -------------------

// alag alag path pay hum log alag rquests bhejtay hain to alg responses atay hain and we select a path for the traffic on our website

// default dynamic route

app.get("/", (req, res) => {
  res.send("This is by default route");
});
app.get("/help", (req, res) => {
  res.send("This is help section ");
});

app.get("/about", (req, res) => {
  res.send("This is the about page !!! ");
});

// Sending request to a wrong or not existed path

app.get("*", (req, res) => {
  res.send("You entered a path , who does not exist !!! ");
});

// We can also use app.post in order to get post request

app.post("/", (req, res) => {
  res.send("Request posted.....");
});
