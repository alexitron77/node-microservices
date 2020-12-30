const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3002;

comments = [];

app.get("/comments", (req, res) => {
  res.send(comments).status(200);
});

app.post("/posts/:id/comments", (req, res) => {
  comment = req.body;
  comment.id = randomBytes(5).toString("hex");
  comments = [...comments, comment];
  result = comments.filter((comment) => comment.postId === req.params.id);
  res.send(result).status(201);
});

app.listen(port, () => {
  return "Successfully started on port " + port;
});
