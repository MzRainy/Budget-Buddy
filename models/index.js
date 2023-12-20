//Changed file path
const User = require('./User');
const Expense = require('./Expense');
const Total = require('./Total');
const Category = require('./Category');

User.hasMany(Expense, {
    foreignKey: 'id',
    onDelete: "CASCADE",
});

Expense.hasMany(Category, {
    foreignKey: 'category_id'
});


User.hasOne(Total);
Total.belongsTo(User);

module.exports = {User, Expense, Total, Category};