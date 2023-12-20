const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Total } = require('../../models');

//Post 'api/budget' create a new Total Entry
router.post('/', withAuth, async (req, res) => {
    try {
        const dbTotalData = await Total.create({
            budget_amt: req.body.userBudget,
            remainder_amt: '0000.00',
            user_id: req.session.user_id, 
        });
        res.json(dbTotalData);
    } catch(err) {
        console.log(err);
        res.status(500).json({err: "Internal Server Error!"});
    }
});

module.exports = router;