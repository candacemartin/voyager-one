import { Request, Response, NextFunction } from 'express';

import { hashPassword } from '../helpers/auth';
import User from '../models/UserModel';

export default {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
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
};
