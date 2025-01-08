import Router from 'express' 
import { brandController } from '../controllers/brandController'
export const router = new Router()

router.post('/', brandController.create)
router.get('/', brandController.get)