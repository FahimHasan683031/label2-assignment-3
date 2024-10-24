import { TRoom } from './room.interface';
import { Room } from './room.model';

const createRoomIntoDB = async (payload: TRoom) => {
  const newRoom = await Room.create(payload);
  return newRoom;
};

const getAllRoomsFromDB = async () => {
  const rooms = await Room.find();
  return rooms;
};

export const RoomServices = {
  createRoomIntoDB,
  getAllRoomsFromDB ,
};
