import Router from 'express' 
import { userController } from '../controllers/useController.js'
export const router = new Router()


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)