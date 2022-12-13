const mysql = require("mysql2/promise");
async function getConnection() {
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant_supply_express",
  });
  return connection;
}

module.exports = getConnection;


