import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { UserValidation } from './user.validation';

const createUser = catchAsync(async (req, res) => {
  const zodValidateUser = UserValidation.createUserValidationSchema.parse(
    req.body,
  );
  const result = await UserServices.createUserIntoDB(zodValidateUser);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All user get succesfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
};
