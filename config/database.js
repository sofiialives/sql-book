const env = process.env.NODE_ENV || "development";
const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;
