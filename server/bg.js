import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost', 
        port: process.env.DB_PORT || 5432 
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение успешно.');
    } catch (error) {
        console.error('Не удалось подключиться к базе данных:', error);
    }
};

testConnection();

export default sequelize;