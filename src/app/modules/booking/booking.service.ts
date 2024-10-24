import { TBooking} from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const newBooking = await Booking.create(payload);
  return newBooking;
};

const getAllBookingsFromDB = async () => {
  const bookings = await Booking.find();
  return bookings;
};

export const BookingServices = {
  createBookingIntoDB,
   getAllBookingsFromDB,
};
