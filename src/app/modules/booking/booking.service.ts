import { Room } from '../room/room.model';
import { Slot } from '../slot/slot.model';
import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const session = await Booking.startSession(); // Start a session
  session.startTransaction();

  const { date, slots, room, user } = payload;

  // Check if the user exists
  const foundUser = await User.findById(user).session(session);
  if (!foundUser) {
    await session.abortTransaction();
    session.endSession();
    return {
      success: false,
      statusCode: 404,
      message: 'User not found',
    };
  }

  // Check if the room exists
  const foundRoom = await Room.findById(room).session(session);
  if (!foundRoom) {
    await session.abortTransaction();
    session.endSession();
    return {
      success: false,
      statusCode: 404,
      message: 'Room not found',
    };
  }

  

  // Check if slots exist and mark them as booked
  const bookedSlots = await Slot.find({ _id: { $in: slots } }).session(session);

  // Check if all slots are found
  if (bookedSlots.length !== slots.length) {
    await session.abortTransaction();
    session.endSession();
    return {
      success: false,
      statusCode: 404,
      message: 'Some slots not found',
    };
  }

  // Update slots to be booked
  for (const slot of bookedSlots) {
    slot.isBooked = true;
    await slot.save({ session });
  }

  // Create a new booking entry
  const totalAmount = bookedSlots.length * foundRoom.pricePerSlot; // Calculate total amount based on slots
  const newBooking = new Booking({
    date,
    slots: bookedSlots,
    room: foundRoom,
    user: foundUser,
    totalAmount,
    isConfirmed: 'confirmed',
    isDeleted: false,
  });

  // Save the booking to the database
  const result = await newBooking.save({ session });

  await session.commitTransaction();
  session.endSession();

  return {
    _id: result._id,
    date: result.date,
    slots: bookedSlots,
    room: foundRoom,
    user: foundUser,
    totalAmount,
    isConfirmed: result.isConfirmed,
    isDeleted: result.isDeleted,
  };
};






const getAllBookingsFromDB = async () => {
  const bookings = await Booking.find();
  return bookings;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
