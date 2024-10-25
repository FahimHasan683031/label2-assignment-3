import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoomServices } from './room.service';


// Create room into database
const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room added succesfully',
    data: result,
  });
});


// Get all rooms from database
const getAllRooms = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room retrieved successfully',
    data: result,
  });
});

// Get single room by id from database
const getRoomById = catchAsync(async(req,res)=>{
  const result = await RoomServices.getRoomById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room retrieved successfully',
    data: result,
  });
})

const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RoomServices.updateRoomIntoDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room updated successfully',
    data: result,
  });
});

const deleteRoomById = catchAsync(async(req,res)=>{
  const {result,room} = await RoomServices.deleteRoom(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room deleted successfully',
    data:{ room,result},
  });
})

export const RoomControllers = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoomById
};
