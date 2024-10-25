/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { TSlot } from './slot.interface';
import { Slot } from './slot.model';
import { Room } from '../room/room.model';

const createSlotIntoDB = async (payload: TSlot) => {
  
  const { room, date, startTime, endTime } = payload;
  const slotDuration = 60;

  // Function to convert HH:MM time to minutes
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Convert start and end times to minutes since midnight
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  // Calculate the total duration and the number of slots
 const totalDuration = endMinutes - startMinutes;
 const numberOfSlots = totalDuration / slotDuration;

 // Generate slots array
 const slots = [];
 for (let i = 0; i < numberOfSlots; i++) {
   const slotStart = startMinutes + i * slotDuration;
   const slotEnd = slotStart + slotDuration;

   // Convert minutes back to HH:MM format for each slot
   const formatTime = (minutes: number): string => {
     const hrs = String(Math.floor(minutes / 60)).padStart(2, '0');
     const mins = String(minutes % 60).padStart(2, '0');
     return `${hrs}:${mins}`;
   };

   slots.push({
     room,
     date,
     startTime: formatTime(slotStart),
     endTime: formatTime(slotEnd),
     isBooked: false,
   });
 }

 const result = await Slot.create(slots);
  return result;
 
}
 


 

const getAvailableSlotsFromDB = async (req:Request) => {

  const { date, roomId } = req.query; 


const query: any = { isBooked: false };

// Add date to query if provided
if (date) {
  query.date = new Date(date as string); 
}

// Add roomId to query if provided
if (roomId) {
  query.room = roomId;
}

// Find available slots and populate room details
const availableSlots = await Slot.find(query)
.populate({
  path: 'room',
  model: Room,
  match: { isDeleted: false },
  select: 'name roomNo floorNo capacity pricePerSlot amenities isDeleted',
});
  return availableSlots;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlotsFromDB,
};
