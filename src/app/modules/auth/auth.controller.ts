import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
 
  const { accessToken,user } = await AuthServices.loginUser(req.body);
  const token = `Bearer ${accessToken}`
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: token,
    data:user,
  });
});


export const AuthControllers = {
  loginUser
};
