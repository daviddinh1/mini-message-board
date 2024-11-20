const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
