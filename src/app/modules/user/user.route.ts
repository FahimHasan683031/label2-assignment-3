import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';


const router = express.Router();

// router.post(
//   '/create-user',
//   validateRequest(UserValidation.createUserValidationSchema),
//   UserControllers.createUser,
// );

router.get(
  '/',
  UserControllers.getAllUsers,
);

export const UserRoutes = router;
