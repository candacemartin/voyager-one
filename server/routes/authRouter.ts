import Router, { Router as IRouter, Request, Response } from 'express';

import passport from '../config/passport';
import authController from '../controllers/authController';

const router: IRouter = Router();

router.post('/signup', authController.signUp, (req: Request, res: Response) =>
  res.send({ message: 'successful signup', user: req.user }),
);

router.get(
  '/login',
  passport.authenticate('local'),
  (req: Request, res: Response) => res.send({ message: 'successful login' }),
);

// tells passport to intercept all get reqs to /auth/google endpoint and handle auth
// router.get(
//   '/google',
//   passport.authenticate('google', { scope: ['profile'] }), // scope tells passport what info we want from google
//   (req: Request, res: Response) =>
//     res.status(200).send('successful auth with google'),
// );

export default router;
