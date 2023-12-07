const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


//route to homepage
router.get('/', async (req,res) => {
  try { 
    res.render('homepage');
  } catch(err) {
    res.status(500).json(err);
  }
});
//route to application page
router.get('/form', withAuth, async (req, res) => {
  try {
    res.render('form');
  } catch(err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
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
=======
//route to sign up page
router.get('/signUp', async (req, res) => {
  try {
>>>>>>> 4c9fb0e9b211baccf3ba8e6bc27498116244270c
    res.render('signUp');
  } catch(err) {
    res.status(500).json(err);
  }
<<<<<<< HEAD
})
>>>>>>> edb5535553736a2d6a3af3326e99a6b95e73fdb0
=======
});
>>>>>>> 4c9fb0e9b211baccf3ba8e6bc27498116244270c


//route to login page
router.get('/login', (req, res) => {

  if (req.session.logged_in) {

    res.redirect('form');
    return;
  }
  res.render('login');


});

module.exports = router;
