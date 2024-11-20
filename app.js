const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Lets play league!",
    user: "David",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { message: "this will output!" });
});

app.get("/new", (req, res) => {
  res.send("the new page works");
});

app.listen(PORT, () => {
  console.log(`This is my express app running on ${PORT}`);
});
