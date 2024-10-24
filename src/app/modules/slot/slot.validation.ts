import { z } from 'zod';

const slotValidationSchema = z.object({
  room: z.string({
    invalid_type_error: 'Room must be a valid ObjectId as a string',
  }),
  date: z.date({
    invalid_type_error: 'Date must be a valid date string',
  }),
  startTime: z.string({
    invalid_type_error: 'Start time must be a string',
  }),
  endTime: z.string({
    invalid_type_error: 'End time must be a string',
  }),
  isBooked: z.boolean({
    invalid_type_error: 'isBooked must be a boolean',
  }).default(false),
});


export const SlotValidation = {
  slotValidationSchema,
};