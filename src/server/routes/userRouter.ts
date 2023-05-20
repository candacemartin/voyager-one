import { Router } from 'express';
import userController from '../controllers/userController';

const router: Router = Router();

router.post('/register', userController.registerUser, (_, res) => {
  console.log('inside userRouter.post');
  return res.send(res.locals.user);
});

export default router;
