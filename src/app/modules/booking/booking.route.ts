import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import bookingValidationSchema from './booking.validation';


const router = express.Router();

router.post(
  '/create-booking',
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking,
);

router.get(
  '/',
  BookingControllers.getAllBookings,
);

export const BookingRoutes = router;
