import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
// import shroomRouter from './routes/shroomRouter';
import userRouter from './routes/userRouter';
import cardRouter from './routes/cardRouter';

const app: Express = express();
const PORT = 3000;

//passport/oauth:
const passport = require('./passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(
  session({
    secret: [process.env.MONGO_URI],
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: 'your_client_id',
      clientSecret: 'your_client_secret',
      callbackURL: '/auth/google/callback', // Replace with your callback URL
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
      // Callback function called after successful authentication
      // You can perform any necessary actions here (e.g., save user data to the database)
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to the desired page after successful authentication
    res.redirect('/dashboard');
  },
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to the desired page after successful authentication
    res.redirect('/dashboard');
  },
);

// Login route
app.get('/login', (req, res) => {
  res.render('login'); // Replace with the actual login page template
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

function ensureAuthenticated(req: any, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

//db connection:
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/shrooms', shroomRouter);
app.use('/user', userRouter);
app.use('/card', cardRouter);

//serve up the index.html
// app.get('/', (req: Request, res: Response) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
// });

// Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route handler
// app.get('*', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// app.use(
//   (
//     err: ErrorRequestHandler,
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) => {
//     const defaultErr = {
//       log: 'Express error handler caught unknown middleware error',
//       status: 400,
//       message: { err: 'An error occurred' },
//     };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   },
// );

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default server;
