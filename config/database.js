const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.DB_NAME,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

async function initializeDatabase() {
  try {
    await sequelize.sync();
    console.log("Database tables created!");

    await sequelize.authenticate();
    console.log("Successful connection");
  } catch (error) {
    console.error("Connection error", error);
  }
}

initializeDatabase();

module.exports = sequelize;
