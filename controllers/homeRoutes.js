const router = require("express").Router();
const { User, Expense, Total } = require("../models");
const withAuth = require("../utils/auth");

//route to homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to sign up page
router.get("/signUp", async (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to application page
router.get("/form", withAuth, async (req, res) => {
  try {
    res.render("form");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to profile page (userInfo display)
router.get("/profile", withAuth, async (req, res) => {
  try {
    //Get the logged in user based on Session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    const expensePromise = Expense.findAll({
      where: { user_id: req.session.user_id },
      attributes: ["id", "amount", "category_id"],
    });

    const totalPromise = Total.findAll({
      where: { user_id: req.session.user_id },
      attributes: ["id", "budget_amt", "remainder_amt", "user_id"],
    });

    const [expenseData, totalData] = await Promise.all([
      expensePromise,
      totalPromise,
    ]);

    const expenses = expenseData.map((expense) => expense.get({ plain: true }));
    const totals = totalData.map((total) => total.get({ plain: true }));

    console.log("expense data: ", expenses);
    console.log("Total data: ", totals);

    res.render("profile", {
      user,
      expenses,
      totals,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("form");
    return;
  }
  res.render("login");
});

module.exports = router;
