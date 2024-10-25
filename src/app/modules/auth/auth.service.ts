import httpStatus from 'http-status';
import config from '../../config';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import AppError from '../../errors/AppError';


const loginUser = async (payload: TLoginUser) => {
  
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload.email);
  
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
 
  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_secret as string,
    '10d',
  );


  return {
    accessToken,
    user
  };
};





export const AuthServices = {
  loginUser
};
