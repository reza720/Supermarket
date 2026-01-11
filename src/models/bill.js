const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Bill=sequelize.define("Bill",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    customerId:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false, defaultValue:DataTypes.NOW},
    total:{type:DataTypes.DECIMAL(10,2),allowNull:false},
},{
    timestamps:true
});
module.exports=Bill;