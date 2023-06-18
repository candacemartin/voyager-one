import { Request, Response, NextFunction } from 'express';

import { hashPassword } from '../helpers/auth';
import User, { IUser } from '../models/UserModel';

export default {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    console.log(
      `outside of try block in authController.signUp. req.body is ${req.body}`,
    );
    const { email, password } = req.body;
    try {
      console.log(
        `inside authController.signUp try block. email is ${email} and password is ${password}`,
      );
      const hashedPassword = await hashPassword(password);
      const user = await User.create({ email, password: hashedPassword });
      req.login(user, (err) => {
        if (err) return next(err);
        return next();
      });
    } catch (err) {
      return next(err);
    }
  },
  logIn: (req: Request, res: Response, next: NextFunction) => {
    req.login(req.user as IUser, (err) => {
      console.log('inside req.logIn callback');
      if (err) return next(err);
      return next();
    });
  },
};
