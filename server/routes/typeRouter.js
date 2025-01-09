import Router from 'express' 
import { typeController } from '../controllers/typeController.js'
import { checkRole } from '../middleware/checkRoleMiddleware.js'
export const router = new Router()

router.post('/',checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)