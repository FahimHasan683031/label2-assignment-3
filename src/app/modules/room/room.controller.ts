import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoomServices } from './room.service';
import { RoomValidation} from './room.validation';

const createRoom = catchAsync(async (req, res) => {
  const zodValidateRoom = RoomValidation.roomValidationSchema.parse(
    req.body,
  );
  const result = await RoomServices.createRoomIntoDB(zodValidateRoom);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});

const getAllRooms = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All user get succesfully',
    data: result,
  });
});

export const RoomControllers = {
  createRoom,
  getAllRooms,
};
