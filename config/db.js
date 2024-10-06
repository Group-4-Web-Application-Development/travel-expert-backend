const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const env = require("dotenv");

// load env
env.config({ path: `.env.${process.env.NODE_ENV}` });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

module.exports = { sequelize, connectDB };
