// =============================================
//  Authentication Routes
// ---------------------------------------------
// Handles authentication-specific routing
// =============================================
const router = require('express').Router();
const passport = require('passport');

// ------------------------------------------------------------------------------------------------
// Logs in a user using passport's email/password auth scheme
// router.post(
//   '/login',(req,res,next)=>{
//     console.log(req.body)
//   passport.authenticate('local', {
//     successReturnToOrRedirect: '/',
//     failureRedirect: '/',
//   })(req, res, next)
//   console.log(res)
//   });
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(req.user);
      });
    }
  })(req, res, next);
})
// ------------------------------------------------------------------------------------------------

router.get("/user", (req, res) => {
  console.log('this is a test4')
  console.log(req.user);
  console.log('this is the test')
  res.send(req.user)
});


module.exports = router;
