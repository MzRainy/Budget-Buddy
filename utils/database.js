const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.budgetbuddy_db,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;