import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express, Response, NextFunction } from 'express';
import session from 'express-session';
//import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';

const app: Express = express();
const PORT = 3000;
const clientSecret = process.env.CLIENT_SECRET || '';
const MONGO_URI = process.env.MONGO_URI || '';

//db connection:
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//use express-session middleware to enable session support
//creates a session object to store a user's session data
app.use(session({
  secret: clientSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, 
}));

// this middleware checks if the user is authenticated. i so, it allows the request to proceed; otherwise, redirects user to /login page
// function ensureAuthenticated(req: any, res: Response, next: NextFunction) {
  
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }
//mount routers
app.use('/auth', authRouter);
// app.use('/shrooms', shroomRouter);
app.use('/user', userRouter);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});





//boneyard:
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


// //initialize passport middleware
// app.use(passport.initialize());

// //enable persistent login sessions
// app.use(passport.session());

//generate new instance of google strategy
//pass in clientID, clientSecret and callbackURL
// passport.use(new GoogleStrategy({
//   clientID: clientID,
//   clientSecret: clientSecret,
//   callbackURL: '/auth/google/callback', // HELP HERE - need to replace this with our specific callback URL or do we set the route to match this?
//   passReqToCallback: true }, 
//   (accessToken: string, refreshToken: string, profile: any, done: any) => {
//   // callback function called after successful authentication
//   // can perform any necessary actions here (e.g., save user data to the database)
//   console.log('inside passport callback', accessToken, refreshToken, profile);
//   return done(null, profile);
// }));

//can use the serializeUser and deserializeUser methods to define how user objects stored in the session
//hhere just passing user object through unchanged
// passport.serializeUser((user: any, done: any) => {
//   done(null, user);
// });

// passport.deserializeUser((user: any, done: any) => {
//   done(null, user);
// });

//implement the authentication and authorization flow

//this route initiates the google oauth process by redirecting the user to google's authentication page and requesting profile info 
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

// //this route handles the callback URL that google calls after the user is authorizes or denies access
// //if auth successful, user is redirected to the /dashboard page, otherwise redirected to /login
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   // Redirect to the desired page after successful authentication
//   res.redirect('/dashboard');
// });