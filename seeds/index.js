const sequelize = require('../config/connection');
const seedCategory = require('./category-seeds');
const seedExpense = require('./expense-seeds');
const seedTotal = require('./total-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ alter: true});

  await seedUser();

  await seedCategory();

  await seedExpense();

  await seedTotal();

  process.exit(0);
};

seedAll;
