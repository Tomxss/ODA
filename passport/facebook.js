const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const user = require('../models/user');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new facebookStrategy({
    clientID: keys.FBAppID,
    clientSecret: keys.FBAppSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    debug(profile);
}));