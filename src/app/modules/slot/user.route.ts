import express from 'express';
import { SlotControllers } from './slot.controller';


const router = express.Router();

router.post(
  '/create-slot',
  SlotControllers.createSlot,
);

router.get(
  '/',
  SlotControllers.getAllSlot,
);

export const SlotRoutes = router;
