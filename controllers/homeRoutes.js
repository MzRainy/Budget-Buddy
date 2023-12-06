const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware

router.get('/', async (req, res) => {
  try { 
    res.render('homepage');
  } catch(err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
router.get('/form', async (req, res) => {
  try { 
    res.render('form');
  } catch(err) {
    res.status(500).json(err);
  }
});
=======
router.get('/signup', async (req, res) => {
  try{
    res.render('signUp');
  } catch(err) {
    res.status(500).json(err);
  }
})
>>>>>>> edb5535553736a2d6a3af3326e99a6b95e73fdb0

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // TODO: Add a comment describing the functionality of this property
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
