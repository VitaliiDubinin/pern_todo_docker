const keys = require("./keys");
const Pool = require("pg").Pool;

const pool = new Pool({
  // host: "localhost",
  // user: "postgres",
  // password: "kthl8822",
  // port: 5432,
  // database: "authtodolist"
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

module.exports = pool;
