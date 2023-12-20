const router = require('express').Router();
const userRoutes = require('./userRoutes');
const totalRoutes = require('./totalRoutes');

router.use('/users', userRoutes);
router.use('/total', totalRoutes);

module.exports = router;
