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

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  //working on this step 7 not getting data for some reason
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/message/:i", (req, res) => {
  const id = parseInt(req.params.i, 10); // Get the id from the route
  const message = messages[id]; // Find the corresponding message
  console.log(message);
  res.render("message", { message: message });
});

module.exports = indexRouter;
