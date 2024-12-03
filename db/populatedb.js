const { Client } = require("pg");

const SQL = `
 CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(12),
  added date
 );

 INSERT INTO messages (text, username, added)
 VALUES
 ('Hello, world!', 'alice', '2023-12-01'),
 ('How are you?', 'bob', '2023-12-02'),
 ('This is a test.', 'charlie', '2023-12-03');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://daviddinh:coolboy111@localhost:5432/msgs",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
