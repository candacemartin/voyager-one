import { Router, Request, Response } from 'express';

import cardController from '../controllers/cardController';

const router = Router();

router.post('/new', cardController.createCard, (req: Request, res: Response) =>
  res.status(201).send(res.locals.card),
);
router.post(
  '/delete',
  cardController.deleteCardByCardId,
  (req: Request, res: Response) =>
    res.status(200).send({ message: 'Successful deletion' }),
);
router.post(
  '/update',
  cardController.updateCardByCardId,
  (req: Request, res: Response) =>
    res.status(200).send({ card: res.locals.card }),
);

export default router;
