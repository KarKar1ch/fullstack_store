import { Device } from "../models/models.js";
import { ApiError } from "../error/ApiError.js";
import path from 'path'
import uuid from 'uuid'

class DeviceController {
    async create(req, res) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
    
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

export const deviceController = new DeviceController()