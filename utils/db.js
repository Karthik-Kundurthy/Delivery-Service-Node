const mysql = require("mysql2/promise");
async function getConnection() {
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HiBuddies0304$$",
    database: "restaurant_supply_express",
  });
  console.log(connection);
  return connection;
}

module.exports = getConnection;


