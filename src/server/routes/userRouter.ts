import { Router } from 'express';
import userController from '../controllers/userController';

const router: Router = Router();

router.post('/register', userController.registerUser);

export default router;
