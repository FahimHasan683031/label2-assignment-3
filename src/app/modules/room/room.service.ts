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

const getRoomById = async(id:string)=>{
  const room = await Room.findOne({_id:id});
  return room
}

const updateRoomIntoDB = async (
  id: string,
  payload: Partial<TRoom>,
) => {
 
  const result = await Room.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
}

const deleteRoom = async(id:string)=>{
  const room = await Room.findOne({_id:id});
  const result = await Room.deleteOne({_id:id})
  return {result,room};
}

export const RoomServices = {
  createRoomIntoDB,
  getAllRoomsFromDB ,
  getRoomById,
  updateRoomIntoDB,
  deleteRoom 
};
