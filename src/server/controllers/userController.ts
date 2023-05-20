import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

export default {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    console.log('inside registerUser controller');
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await User.create({ firstName, lastName, email, password });
      res.locals.user = user;
      return next();
    } catch (error) {
      return next(error);
    }
  },
};
