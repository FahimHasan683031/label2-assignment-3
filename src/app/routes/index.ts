import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { RoomRoutes } from '../modules/room/room.route';
import { SlotRoutes } from '../modules/slot/user.route';
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
    path:'/booking',
    route:BookingRoutes,
  },
  {
    path:'/auth',
    route:AuthRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
