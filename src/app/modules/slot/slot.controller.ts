import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SlotServices } from './slot.service';


const createSlot = catchAsync(async (req, res) => {

  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slot is created succesfully',
    data: result,
  });
});

const getAllSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlotsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All slots get succesfully',
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  getAllSlot,
};
