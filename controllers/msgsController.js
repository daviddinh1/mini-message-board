const db = require("../db/queries");

async function getAllMsgs(req, res) {
  const messages = await db.getAllMsgs();
  console.log("messages:", messages);
  res.render("index", { messages: messages });
}

async function getNewForm(req, res) {
  res.render("form");
}

async function pushNewMsg(req, res) {
  console.log(req.body);
  const text = req.body.message;
  const username = req.body.author;
  await db.pushNewMsg(text, username, "2023-12-01");
  res.redirect("/");
}

async function getOneMsg(req, res) {
  const id = parseInt(req.params.i, 10);
  //pass id into queries
  console.log("its being called id is:", id);
  const message = await db.getOneMsg(id);
  console.log("this is the message", message);
  res.render("message", { message: message });
}

module.exports = {
  getAllMsgs,
  getNewForm,
  pushNewMsg,
  getOneMsg,
};
