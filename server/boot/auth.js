// Passport setup and authentication schemes goes here
// =============================================
//  Authentiction Boot Script
// ---------------------------------------------
// Sets up passport, its strategies, and its
// callback functions
// =============================================
const passport = require('passport');
const stratLocal = require('passport-local');
const { User } = require('../models');


// passport.use( 'local', new stratLocal({
//         usernameField: 'email',
//         passwordField: 'password',
//       }, 
//   (username, password, done) => {
//     User.findOne({where: { email: username }}, (err, user) => {
//       console.log("working");
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       console.log("working");
//       return done(null, user);
//     });
//   }
// ));
passport.use(
  'local',
  new stratLocal(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (username, password, done) => {
      User.findOne({ where: { email: username } })
        .then( function (user) {
          if (!user) {
            return done(null, false, { message: 'No user found.' });
          }
          if (!user.checkPassword(password)) {
            return done(null, false, { message: 'Password incorrect.' });
          }

          return done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);

// implements a basic local authentication scheme
passport.use(
  'local-signup',
  new stratLocal(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      User.findOne({ where: { email: username } }).then(async function (user) {
        if (!user) {
          try {
            const newUser = await User.create({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              isDM: req.body.isDM,
            });
            return done(null, newUser);
          } catch (err) {
            done(err);
          }
        }
      });
    }
  )
);

// Saves the user's session by the ID
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// passport.serializeUser(function (user, done) {
//   process.nextTick(function () {
//     done(null, user.id);
//   });
// });

// Retrieves authentication by id
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(function(user) {
    console.log("hello3333333")
    done(null, user);
  }).catch(function(err) {
    if (err) {
      throw err;
    }
 });
});
// passport.deserializeUser(async (id, done)=> {
//   try {
//     let user = User.findByPk(id);
//     done(null, user);
//   } catch (err) {
//     throw(err);
//   }
// });

module.exports = passport;