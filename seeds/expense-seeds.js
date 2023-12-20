const { Expense } = require('../models');

const expenseData = [
    {
        amount: '1635.45',
        category_id: '1',
        user_id: '1',
    },
    {
        amount: '2746.56',
        category_id: '2',
        user_id: '1',
    },
    {
        amount: '0524.34',
        category_id: '3',
        user_id: '1',
    },
    {
        amount: '0413.23',
        category_id: '4',
        user_id: '1',
    },
    {
        amount: '3824.71',
        category_id: '1',
        user_id: '2',
    },
    {
        amount: '2713.61',
        category_id: '2',
        user_id: '2',
    },
    {
        amount: '1602.50',
        category_id: '3',
        user_id: '2',
    },
    {
        amount: '591.40',
        category_id: '4',
        user_id: '2',
    },
    {
        amount: '3824.59',
        category_id: '1',
        user_id: '3',
    },
    {
        amount: '2713.48',
        category_id: '2',
        user_id: '3',
    },
    {
        amount: '1602.37',
        category_id: '3',
        user_id: '3',
    },
    {
        amount: '591.26',
        category_id: '4',
        user_id: '3',
    },
];

const seedExpense = async () => {
    await Expense.bulkCreate(expenseData, {individualHooks: true});
};

module.exports = seedExpense;