import Router from 'express' 
import { brandController } from '../controllers/brandController.js'
export const router = new Router()

router.post('/', brandController.create)
router.get('/', brandController.getAll)