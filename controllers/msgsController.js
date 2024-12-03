const db = require("../db/queries");

async function getAllMsgs(req, res) {
  const messages = await db.getAllMsgs();
  console.log("messages:", messages);
  res.render("index", { messages: messages });
}

async function getNewForm(req, res) {
  res.render("form");
}

module.exports = {
  getAllMsgs,
  getNewForm,
};
