import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices} from './booking.service';
import bookingValidationSchema from './booking.validation';

const createBooking = catchAsync(async (req, res) => {
  const zodValidateBooking = bookingValidationSchema.parse(
    req.body,
  );
  const result = await BookingServices.createBookingIntoDB(zodValidateBooking);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is created succesfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Bookings get succesfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBookings,
};
