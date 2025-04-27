require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

module.exports = sequelize;