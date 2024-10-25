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
  auth(UserRole.admin, UserRole.user),
  RoomControllers.getAllRooms,
);

router.get(
  '/:id',
  auth(UserRole.admin, UserRole.user),
  RoomControllers.getRoomById,
);

router.put(
  '/:id',
  auth(UserRole.admin),
  RoomControllers.updateRoom,
);

router.delete(
  '/:id',
  auth(UserRole.admin),
  RoomControllers.deleteRoomById,
);
export const RoomRoutes = router;
