import Router, { Router as IRouter, Response, Request } from 'express';

import chatController from '../controllers/chatController';

const router: IRouter = Router();

router.post(
  '/new',
  chatController.newMessage,
  (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.send(res.locals.chatCompletion.body);
  },
);

export default router;
