const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Customer=sequelize.define("Customer",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Customer;