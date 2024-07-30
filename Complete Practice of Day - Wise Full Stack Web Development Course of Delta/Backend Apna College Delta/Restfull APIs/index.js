const express = require("express");
const app = express();
let port = 3000;
let path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("methodOverride");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

let posts = [
  {
    id: uuidv4(),
    name: "Owais Nadeem",
    Field: "BSCS",
    Profession: "Front End Dev",
  },
  {
    id: uuidv4(),
    name: "Hamza Arshad",
    Field: "Medical Sciences",
    Profession: "Student ",
  },
  {
    id: uuidv4(),
    name: "Hammad Arshad",
    Field: "BSCS",
    Profession: "Intern",
  },
];

app.get("/posts", (req, res) => {
  // res.send("Ok ! Data has been received ");
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("createPost.ejs");
});

// Here, I am finding the posts with same user id

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;

  let post = posts.find((p) => id === p.id);

  if (!post) {
    res.render("Error_SinglePost.ejs");
  } else {
    res.render("singlePost.ejs", { post });
  }
});

// Create a route request of patch , in order to edit your single post

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;

  let NewContent = req.body.content;
  let post = posts.find((p) => p.id == id);

  post.content = NewContent;

  console.log(post);

  res.send("Patch request done ! ");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id == id);

  res.render("EditPost.ejs", { post });
});

// Creating a post request after the submission of my form
app.post("/posts", (req, res) => {
  let id = uuidv4();
  let { name, Field } = req.body;

  posts.push({ id, name, Field });
  res.redirect("/posts");
});

app.use("/", (req, res) => {
  res.send("Server is working on main index route ...  ");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
