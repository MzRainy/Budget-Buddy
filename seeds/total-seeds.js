const { Total } = require('../models');

const totalData = [
    {
        budget_amt: '6000.00',
        remainder_amt: '0000.00',
        user_id: '1',
    },
    {
        budget_amt: '10000.00',
        remainder_amt: '0000.00',
        user_id: '2',
    },
    {
        budget_amt: '9000.00',
        remainder_amt: '0000.00',
        user_id: '3',
    },
];

const seedTotal = async () => {
    await Total.bulkCreate(totalData, {individualHooks: true});
};

module.exports = seedTotal;