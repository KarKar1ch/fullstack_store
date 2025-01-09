import { Device, DeviceInfo } from "../models/models.js";
import { ApiError } from "../error/ApiError.js";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { title } from "process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach( i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let device;
        if (!brandId & !typeId) {
            device = await Device.findAndCountAll({ limit, offset})
        };
        if (brandId & !typeId) {
            device = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId & typeId) {
            device = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId & typeId) {
            device = await Device.findAndCountAll({where:{brandId, brandId}, limit, offset})
        }
        return res.json(device)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

export const deviceController = new DeviceController()