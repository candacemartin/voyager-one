import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    console.log('inside registerUser controller');
    try {
      const user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      };
      console.log('user: ', user);
      const data = await User.create(user);
      res.locals.user = data;
      return next();
    } catch (error) {
      return next(error);
    }
  },
};
