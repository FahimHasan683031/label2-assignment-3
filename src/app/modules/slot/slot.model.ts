import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";



const slotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,  
    ref: 'Room',                 
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isBooked: {
    type: Boolean,
    required: false,              
  },
}, { timestamps: true });

export const Slot = model<TSlot>('Slot', slotSchema);

