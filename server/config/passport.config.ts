import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User, { IUser } from '../models/UserModel';
import { comparePasswords } from '../helpers/auth';

// This configures the verify() cb to check for an existing user w/ same email & password
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        console.log('inside try block of LocalStrategy config');
        const user: IUser | null = await User.findOne({ email });
        if (!user) {
          // User not found
          console.log('user not found');
          return done(null, false);
        }
        const compare = await comparePasswords(password, user.password);
        if (!compare) {
          // Invalid password
          console.log('invalid password');
          return done(null, false);
        }
        // User authenticated successfully
        console.log('user authenticated successfully');
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);

// serialize user object and store in session
passport.serializeUser((user, done) => {
  console.log('inside passport.serializeUser');
  // @ts-ignore
  done(null, user.id);
});

// retrieve serialized data and reconstruct user object
passport.deserializeUser(async (id, done) => {
  try {
    console.log('inside passport.deserializeUser');
    const user = await User.findById(id);
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

export default passport;
