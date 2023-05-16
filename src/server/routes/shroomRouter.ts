import { Router } from 'express';
import shroomController from '../controllers/shroomController';

const router = Router();

router.get('/', shroomController.getShrooms);
router.post('/', shroomController.createShroom);
router.get('/:id', shroomController.getShroomById);
router.put('/:id', shroomController.updateShroomById);
router.delete('/:id', shroomController.deleteShroomById);

export default router;