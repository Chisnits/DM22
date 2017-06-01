const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');
    //   config = require('./config.js')

let app = express();
app.use(session({
    secret: 'woof'
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
  domain: 'chisnits.auth0.com',
  clientID: 'zF4mdZcCPX0lobmKqNbRU59XeShdogTW',
  clientSecret: 'cky1AAjBghGbXpl7FRwvLzpPj3JavMH_aS3yM0Zrdk5ToggvmxyKK7iuttlKjWlT',
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    //Normally I would find the user in the database here and then invoke done
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'))//Start
// app.get('/auth', passport.authenticate('twitter')) do this for different logins

app.get('/auth/callback',
  passport.authenticate('auth0', {
        successRedirect: '/auth/me',
        failureRedirect: '/#/login'}), function(req, res) {
    res.status(200).send(req.user);
}) //Auth0 returns here


passport.serializeUser(function(user,done){
    done(null, user);
}) //encodes to put on session

passport.deserializeUser(function(obj, done) {
  //what do we want to put on user?
  done(null, obj); 
}); //decodes to put on req.user

app.get('/auth/me', function(req, res) {
  res.send (req.user);
})

app.listen(3000, function() {
  console.log('Listening on 3000');
});