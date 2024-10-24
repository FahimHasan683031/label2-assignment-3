import { z } from 'zod';

const roomValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
  }),
  roomNo: z.number({
    invalid_type_error: 'Room number must be a number',
  }),
  floorNo: z.number({
    invalid_type_error: 'Floor number must be a number',
  }),
  capacity: z.number({
    invalid_type_error: 'Capacity must be a number',
  }).min(1, 'Capacity must be at least 1'),
  pricePerSlot: z.number({
    invalid_type_error: 'Price per slot must be a number',
  }),
  amenities: z.array(z.string({
    invalid_type_error: 'Each amenity must be a string',
  }), {
    invalid_type_error: 'Amenities must be an array of strings',
  }),
  isDeleted: z.boolean({
    invalid_type_error: 'isDeleted must be a boolean',
  }).default(false),
});


export const RoomValidation = {
  roomValidationSchema,
};
