import express from 'express';
import { SlotControllers } from './slot.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SlotValidation } from './slot.validation';


const router = express.Router();

router.post(
  '/create-slot',
  validateRequest(SlotValidation.slotValidationSchema),
  SlotControllers.createSlot,
);

router.get(
  '/',
  SlotControllers.getAllSlot,
);

export const SlotRoutes = router;
