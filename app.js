const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const { body, validationResult } = require("express-validator");

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`This is my express app running on ${PORT}`);
});
