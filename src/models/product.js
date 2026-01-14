const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Product=sequelize.define("Product",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Product;