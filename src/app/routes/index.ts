import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { RoomRoutes } from '../modules/room/room.route';
import { SlotRoutes } from '../modules/slot/slot.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { AuthRoutes } from '../modules/auth/auth.rout';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path:'/rooms',
    route:RoomRoutes,
  },
  {
    path:'/slots',
    route:SlotRoutes,
  },
  {
    path:'/bookings',
    route:BookingRoutes,
  },
  {
    path:'/auth',
    route:AuthRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
