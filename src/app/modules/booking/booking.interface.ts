import mongoose from 'mongoose';

export interface TBooking {
  room: mongoose.Types.ObjectId | string;  
  slots: mongoose.Types.ObjectId[] | string[];  
  user: mongoose.Types.ObjectId | string;  
  date: Date;
  totalAmount: number;
  isConfirmed: 'confirmed' | 'unconfirmed' | 'canceled';  
  isDeleted: boolean;  
}
