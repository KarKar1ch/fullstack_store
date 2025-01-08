import Router from 'express' 
export const router = new Router()
import { router as deviceRouter } from './deviceRouter.js';
import { router as brandRouter } from './brandRouter.js';
import { router as typeRouter } from './typeRouter.js';
import { router as userRouter } from './userRouter.js';


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/brand',  brandRouter)