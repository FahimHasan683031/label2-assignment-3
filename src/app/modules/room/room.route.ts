import express from 'express';
import { RoomControllers } from './room.controller';


const router = express.Router();

router.post(
  '/create-room',
  RoomControllers.createRoom,
);

router.get(
  '/',
  RoomControllers.getAllRooms,
);

export const RoomRoutes = router;
