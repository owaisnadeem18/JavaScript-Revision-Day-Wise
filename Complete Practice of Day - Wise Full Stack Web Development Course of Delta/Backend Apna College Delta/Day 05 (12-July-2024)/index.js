const express = require("express");
const app = express();

let port = 3001;

app.set("view engine", "ejs");

// If you are running the local host from the parent directory then you are liable to must use the following line of code

// app.set("views", path.join(__dirname, "views"));

// Now we have to look that , how we can also pass the data to our home.js EJS

app.get("/", (req, res) => {
  let data = Math.floor(Math.random() * 6) + 1;
  res.render("home", { data });
});

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});

// Here we are going to perform an activity which will be based on revision of all previous concepts

app.get("/insta/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  let InstaUserName_Data = instaData[username];
  console.log(InstaUserName_Data);

  if (InstaUserName_Data) {
    res.render("Insta.ejs", { InstaUserName_Data });
  } else {
    res.render("error.ejs");
  }
});

app.get("/sec", (req, res) => {
  res.send("I am another section ... ");
});
