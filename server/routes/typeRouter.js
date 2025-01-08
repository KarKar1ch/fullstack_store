import Router from 'express' 
import { typeController } from '../controllers/typeController'
export const router = new Router()

router.post('/', typeController.create)
router.get('/', typeController.get)