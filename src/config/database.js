require("dotenv").config();
const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "Supermarket",
    "root",
    'root',
    {
        host:"localhost",
        dialect:"mysql",
        logging:false,
    }
);
module.exports= sequelize;