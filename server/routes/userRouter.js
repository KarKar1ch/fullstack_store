import Router from 'express' 
import { userController } from '../controllers/useController.js'
import { auth } from '../middleware/authMiddleware.js'
export const router = new Router()


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth',auth, userController.check)