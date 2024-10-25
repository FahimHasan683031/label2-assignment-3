import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices} from './booking.service';


const createBooking = catchAsync(async (req, res) => {
 
  const result = await BookingServices.createBookingIntoDB(req.body);

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

const getMyBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getMyBooings(req.user.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Bookings get succesfully',
    data: result,
  });
});


const updateBookign = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingServices.updateBookingIntoDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking updated successfully',
    data: result,
  });
});

const deleteBookingById = catchAsync(async(req,res)=>{
  const { id } = req.params;
  const result = await BookingServices.deleteBooking(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking delete successfully',
    data: result,
  });
})

export const BookingControllers = {
  createBooking,
  getAllBookings,
  getMyBookings,
  updateBookign,
  deleteBookingById
};
