import * as dotenv from 'dotenv';
dotenv.config();

import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
// import shroomRouter from './routes/shroomRouter';
import userRouter from './routes/userRouter';

const app: Express = express();
const PORT = 3000;

//db connection:
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/shrooms', shroomRouter);
app.use('/api/user', userRouter);

//serve up the index.html
app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route handler
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

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

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
