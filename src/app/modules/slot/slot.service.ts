import { TSlot} from './slot.interface';
import { Slot } from './slot.model';


const createSlotIntoDB = async (payload: TSlot) => {
  const newSlot = await Slot.create(payload);
  return newSlot;
};

const getAllSlotsFromDB = async () => {
  const slots = await Slot.find();
  return slots;
};

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
};
