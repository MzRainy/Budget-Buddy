const { User } = require('../models');

const userData = [
    {
        name: 'Nick',
        email: 'nick.canchola.7.27@gmail.com',
        password: 'password12345',
    },
    {
        name: 'Joe',
        email: 'thisplace@thatplace.com',
        password: 'password12345',
    },
    {
        name: 'Dohn',
        email: 'someone@someplace.com',
        password: 'password12345',
    },
];

const seedUser = async () => {
    await User.bulkCreate(userData, {individualHooks: true});
};

module.exports = seedUser;