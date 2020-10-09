const passport = require('passport');

const LocalStrategy = require('./localStrategy');
const User = require('../database/models/user');

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, 'username', (err, user) => {
    done(null, user);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
