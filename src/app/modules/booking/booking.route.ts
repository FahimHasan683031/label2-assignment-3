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
  auth(UserRole.admin),
  BookingControllers.getAllBookings,
);

router.put(
  '/:id',
  auth(UserRole.admin),
  BookingControllers.updateBookign,
);

router.delete(
  '/:id',
  auth(UserRole.admin),
  BookingControllers.deleteBookingById,
);

router.get(
  '/my-bookings',
  auth(UserRole.admin, UserRole.user),
  BookingControllers.getMyBookings,
);

export const BookingRoutes = router;
