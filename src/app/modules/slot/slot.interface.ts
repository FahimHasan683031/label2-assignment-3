import mongoose from "mongoose";

export interface TSlot {
  room:mongoose.Types.ObjectId | string;           
  date: Date;             
  startTime: string;      
  endTime: string;        
  isBooked?: boolean;      
}
