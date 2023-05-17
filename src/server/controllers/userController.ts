import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';

export default {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await User.create({ firstName, lastName, email, password });
      return res.send(user);
    } catch (error) {
      return next(error);
    }
  },
};
