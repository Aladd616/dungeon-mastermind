// =============================================
//  User Routes
// ---------------------------------------------
// Handles user accounts
// =============================================
const router = require('express').Router();
const passport = require('passport');
const { User } = require('../../models');

// ------------------------------------------------------------------------------------------------
// Gets all data about all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------------------------
// Gets data about one user by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findone();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------------------------
// Creates a new user using /api/users/
router.post( '/',  async (req, res, next) => {
    try { 
      console.log(req.body)
      const userData = await User.create(req.body);
    res.status(200).json(userData)
      passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/',
      })
    } catch (err) {
     return res.status(400).json(err)
    }
  }
);

// ------------------------------------------------------------------------------------------------
// Logs in a previously created user using /api/users/login
router.post(
  '/login',
  passport.authenticate('local'),
  async (req, res, next) => {
    res.json({ message: 'Log-in Successful!' });
  }
);

// ------------------------------------------------------------------------------------------------
// Log out a currently signed in user using /api/users/logout
router.post('/logout', async (req, res, next) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// ------------------------------------------------------------------------------------------------
// Gets data about one user by id
router.get('/name/:name', async (req, res) => {
  console.log("testing 123")
  try {
    const friend = await User.findOne({where: {name:req.params.name}});

    res.status(200).json(friend);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
