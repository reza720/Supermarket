const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Customer=sequelize.define("Customer",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:true,
        is:{
            args:[/^[a-zA-Z ]+$/],
            msg:"name should be letters and space",
        }
    }},
    phone:{type:DataTypes.STRING, allowNull:false, validate:{
        isNumeric:{
            args:true,
            msg:"phone should be numbers only",
        }, 
        len:{
            args:[10,10],
            msg:"phone should be 10 digits",
        }
    }},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Customer;