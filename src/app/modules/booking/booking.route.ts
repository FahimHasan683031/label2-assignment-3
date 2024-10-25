import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import bookingValidationSchema from './booking.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.constant';


const router = express.Router();

router.post(
  '/',
  auth(UserRole.admin, UserRole.user),
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking,
);

router.get(
  '/',
  BookingControllers.getAllBookings,
);

export const BookingRoutes = router;
