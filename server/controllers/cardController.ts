import { Request, Response, NextFunction } from 'express';
import GrowModel from '../models/GrowModel';

export default {
  async createCard(req: Request, res: Response, next: NextFunction) {
    try {
      const card = {
        created_by: req.body.created_by,
        mushroom_type: req.body.mushroom_type,
        container: req.body.container,
        substrate: req.body.substrate,
        inoculation_method: req.body.inoculation_method,
      };
      const created_card = await GrowModel.create(card);
      res.locals.card = created_card;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  async getCardByUserId(req: Request, res: Response, next: NextFunction) {},
  async getCardByCardId(req: Request, res: Response, next: NextFunction) {},
  async updateCardByCardId(req: Request, res: Response, next: NextFunction) {
    const { id, mushroom_type, container, substrate, inoculation_method } =
      req.body;
    try {
      const card = await GrowModel.findById(id);
      if (!card) {
        return res.status(404).json({ error: 'Card could not be found' });
      }
      if (mushroom_type) {
        card.mushroom_type = mushroom_type;
      }
      if (container) {
        card.container = container;
      }
      if (substrate) {
        card.substrate = substrate;
      }
      if (inoculation_method) {
        card.inoculation_method = inoculation_method;
      }
      await card.save();
      res.locals.card = card;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  async deleteCardByCardId(req: Request, res: Response, next: NextFunction) {
    const id = req.body.id;
    try {
      await GrowModel.findByIdAndDelete(id);
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
