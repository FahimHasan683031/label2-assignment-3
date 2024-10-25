import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

// Define the Booking schema
const bookingSchema = new Schema<TBooking>({
  room: {
    type: Schema.Types.ObjectId,   
    ref: 'Room',
    required: true,
  },
  slots: [{
    type: Schema.Types.ObjectId,   
    ref: 'Slot',
    required: true,
  }],
  user: {
    type: Schema.Types.ObjectId,  
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: false,
  },
  isConfirmed: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'canceled'],  
    required:false,
  },
  isDeleted: {
    type: Boolean,
    required: false, 
  },
}, { timestamps: true });


export const Booking = model<TBooking>('Booking', bookingSchema);
