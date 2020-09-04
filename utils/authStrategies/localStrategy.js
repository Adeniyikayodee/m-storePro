const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../modules/user/models/User')

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email })
    if (!user) return done(null, false, { error: 'user not found'})
    if (await user.checkPassword(password)) return done(null, user)
    return done(null, false, { error: 'Incorrect Password'} )
  } catch (e) {
    return done(e)
  }
}))

passport.serializeUser((user, done) => {
  return done(null, user._id)
})

passport.deserializeUser(async (_id, done) => {
  try {
    const user = await User.findOne({ _id })
    return done(null, user)
  } catch (e) {
    return done(e)
  }
})