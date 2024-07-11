const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.use((req, res) => {
// app.use always converts the request into an object . Initially , this request exists in the form of a text
// console.log(req);
// console.log(`Request has been received !`);

// res.send("This is a text request");

// We can also pass the request data as an object

// res.send({
//   myName: "Owais Nadeem",
//   age: 22,
// });

// Our Express JS will convert this object as a JSON

// let code =
//   "<h1>Owais Nadeem</h1> <p>I am a MERN stack developer</p> <ul><li>Eat</li><li>Sleep</li><li>Code</li><li>Repeat</li> <h4>This is all about my routine ... </h4> </ul> ";

// res.send(code);

// Let's discuss a little bit more about our routing concept in Express JS

// Route is basically considered as a path , where we can set more than one paths to engage more traffic on our websites on different routes
// });

// app.use is actually used to send the requests in our browser , whenever we send requests in our browser. We see that app.use prints something on the console

// --------------------- Now Let's talk about our Routing in Express --------------------

// app.get is used to set different routes for different paths of our web application

app.get("/", (res, req) => {
  console.log("This is the root path");
});
