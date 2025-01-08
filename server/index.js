import express from 'express'
import dotenv from 'dotenv'
import  sequelize  from './bg.js'
import {User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand} from './models/models.js'
import cors from 'cors'
import {router as router} from './routes/index.js'
import { ErrorHandler } from './middleware/ErrorHandlingMiddleware.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router);

app.use(errorHandler)

const start = async() => {
    try{
        await sequelize.sync()
        await sequelize.authenticate()
        app.listen(PORT, ()=>{
            console.log(`Server starting on port:${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}


start()