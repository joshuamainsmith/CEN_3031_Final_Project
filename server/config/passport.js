const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/UserModel');
const logger = require('heroku-logger')


const cookieExtractor = req => {
  let token = null;
  logger.error('cookie extractor cookie 1: ' + req.headers.cookie)
  if(req && req.headers.cookie) {
    logger.error('cookie extractor cookie 2: ' + req.headers.cookie)
    token = req.headers.cookie.split("=")[1];
  }
  logger.error('cookie extractor token 3: ' + token)
  return token;
}

// authorization
passport.use(new JwtStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: "NoobCoder"
}, (payload, done) => {
  logger.error('passport.js payload: ' + payload)
  User.findById({_id: payload.sub}, (err, user) => {
    if(err) {
      logger.error('passport.js error with the db')
			return done(err, false);
		}

    if(user) {
      logger.error('passport.js returning user')
			return done(null, user);
		} else {
      logger.error('passport.js couldnt find user')
      return done(null, false);
    }
  })
}))

// authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username}, (err, user) => {
    // something went wrong with db
    if(err)
      return done(err);
    // if no user exist
    if(!user)
      return done(null, false);
    // check if password is correct
    user.comparePassword(password,done);
  })
}));
