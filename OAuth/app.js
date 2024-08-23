const express = require('express');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure session middleware
app.use(session({
  secret: 'secret', // Replace with a random string (used to sign the session ID cookie)
  resave: true,
  saveUninitialized: true
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// OAuth 2.0 Strategy configuration
passport.use(new OAuth2Strategy({
  authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
  tokenURL: 'https://accounts.google.com/o/oauth2/token',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.SECRETKEY,
  callbackURL: 'http://localhost:3000/auth/provider/callback'
},
function(accessToken, refreshToken, profile, done) {
  // Handle user profile storage or retrieval
  return done(null, profile);
}));

// Serialize user into the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Example route
app.get('/', (req, res) => {
  res.send('<a href="/auth/provider">Login with OAuth 2.0</a>');
});

// OAuth 2.0 authentication route
app.get('/auth/provider',
  passport.authenticate('oauth2'));

// OAuth 2.0 callback route
app.get('/auth/provider/callback',
  passport.authenticate('oauth2', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect or respond accordingly
    res.redirect('/profile');
  });

// Example profile route
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hello, ${req.user.displayName}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});

