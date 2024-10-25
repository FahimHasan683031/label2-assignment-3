import express from 'express';
import { SlotControllers } from './slot.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SlotValidation } from './slot.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.constant';


const router = express.Router();

router.post(
  '/',
  auth(UserRole.admin),
  validateRequest(SlotValidation.slotValidationSchema),
  SlotControllers.createSlot,
);

router.get(
  '/availability',
  auth(UserRole.admin,UserRole.user),
  SlotControllers.getAllSlot,
);

export const SlotRoutes = router;
