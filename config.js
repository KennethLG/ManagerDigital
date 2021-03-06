require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME
}