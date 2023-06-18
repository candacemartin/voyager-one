import Router, { Router as IRouter, Request, Response } from 'express';

import passport from '../config/passport.config';
import authController from '../controllers/authController';

const router: IRouter = Router();

router.post('/signup', authController.signUp, (req: Request, res: Response) =>
  res.send({ message: 'successful signup', user: req.user }),
);

router.post(
  '/login',
  passport.authenticate('local'),
  authController.logIn,
  (req: Request, res: Response) =>
    res.status(200).send({ message: 'successful login' }),
);

export default router;
