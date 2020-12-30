const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let posts = [];

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const post = {};
  post.id = randomBytes(5).toString("hex");
  post.title = req.body.title;
  posts = [...posts, post];
  res.status(200).send(post);
});

app.listen(port, () => {
  console.log("App is listening on ", port);
});
