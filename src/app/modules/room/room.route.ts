import express from 'express';
import { RoomControllers } from './room.controller';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.constant';


const router = express.Router();

router.post(
  '/',
  auth(UserRole.admin),
  validateRequest(RoomValidation.roomValidationSchema),
  RoomControllers.createRoom,
);

router.get(
  '/',
  RoomControllers.getAllRooms,
);

export const RoomRoutes = router;
