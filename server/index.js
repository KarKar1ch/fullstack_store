import express from 'express'
import dotenv from 'dotenv'
import  sequelize  from './bg.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()


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