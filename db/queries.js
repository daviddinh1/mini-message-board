const pool = require("./pool");

async function getAllMsgs() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function pushNewMsg(text, username, added) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [text, username, added]
  );
}

async function getOneMsg(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    parseInt(id),
  ]);
  const row = rows[0];
  return row;
}

module.exports = {
  getAllMsgs,
  pushNewMsg,
  getOneMsg,
};
