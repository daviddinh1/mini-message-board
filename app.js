const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/", indexRouter);

app.get("/new", (req, res) => {
  res.send("the new page works");
});

app.listen(PORT, () => {
  console.log(`This is my express app running on ${PORT}`);
});
