require("dotenv").config();
const { Pool } = require("pg");

// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: process.env.ROLE_NAME,
//   database: "msgs",
//   password: process.env.ROLE_PASS,
//   port: 5432, // The default port
// });

module.exports = new Pool({
  // connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASS}@localhost:5432/msgs`,
  connectionString:
    "postgresql://postgres:bzlUNEefGDtLUWjzgAhzHgUUyoGzFQcb@junction.proxy.rlwy.net:58126/railway",
});
