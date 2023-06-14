import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/UserModel';
import { IUser } from '../models/UserModel';
import { comparePasswords } from '../helpers/auth';

// This configures the verify() cb to check for an existing user w/ same email & password
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false);
        }

        if (!comparePasswords(user.password, password)) {
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        return done(err); // Pass the error to the 'done' callback
      }
    },
  ),
);

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: '/dashboard',
//     },
//     (accessToken, refreshToken, profile, done) => {},
//   ),
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async ({ _id }, done) => {
  try {
    const user = await User.findById(_id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
