import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';

import passport from './config/passport.config';
import authRouter from './routes/authRouter';
import chatRouter from './routes/chatRouter';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);
app.use(passport.session());
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/chat', chatRouter);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

export default app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${process.env.PORT}`,
  );
});
