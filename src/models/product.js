const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Product=sequelize.define("Product",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true, validate:{
        notEmpty:{
            args:true,
            msg:"name cannot be empty",
        }
    }},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false, validate:{
        min:{
            args:[0],
            msg:"price can not be negative",
        },
    }},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Product;