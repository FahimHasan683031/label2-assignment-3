import { z } from 'zod';

const bookingValidationSchema = z.object({
  room: z.string({
    invalid_type_error: 'Room must be a valid ObjectId string',
  }),
  slots: z.array(z.string({
    invalid_type_error: 'Slot ID must be a valid ObjectId string',
  })),
  user: z.string({
    invalid_type_error: 'User must be a valid ObjectId string',
  }),
  date: z.string({
    invalid_type_error: 'Date must be a valid date string',
  }),
  totalAmount: z.number({
    invalid_type_error: 'Total amount must be a number',
  }).optional(),
  isConfirmed: z.enum(['confirmed', 'unconfirmed', 'canceled'], {
    invalid_type_error: 'isConfirmed must be one of confirmed, unconfirmed, or canceled',
  }).optional(),
  isDeleted: z.boolean({
    invalid_type_error: 'isDeleted must be a boolean',
  }).optional(),
});

export default bookingValidationSchema;
