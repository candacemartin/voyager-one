import {Router} from 'express';

import chatController from '../controllers/chatController';

const router = Router();

router.post('/new', chatController.newMessage,(req, res) => res.send({data: res.locals.botMessage}));
router.get('/history');

export default router;