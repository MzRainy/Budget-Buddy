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

//route to sign up page
router.get('/signUp', async (req, res) => {
  try {
    res.render('signUp');
  } catch(err) {
    res.status(500).json(err);
  }
});


//route to login page
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    
    
    res.redirect('form');
    return;
  }
  res.render('login');
  
  

});

module.exports = router;
