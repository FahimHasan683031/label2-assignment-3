import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SlotServices } from './slot.service';
import { SlotValidation } from './slot.validation';

const createSlot = catchAsync(async (req, res) => {
  const zodValidateSlot = SlotValidation.slotValidationSchema.parse(
    req.body,
  );
  const result = await SlotServices.createSlotIntoDB(zodValidateSlot);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});

const getAllSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlotsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All user get succesfully',
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  getAllSlot,
};
