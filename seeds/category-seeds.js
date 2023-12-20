const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Housing',
    },
    {
        category_name: 'Gas',
    },
    {
        category_name: 'Food',
    },
    {
        category_name: 'MISC.',
    },
];

const seedCategory = async () => {
    await Category.bulkCreate(categoryData, {individualHooks: true});
};

module.exports = seedCategory;