const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const BillItem=sequelize.define("BillItem",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    billId:{type:DataTypes.INTEGER, allowNull:false},
    productId:{type:DataTypes.INTEGER, allowNull:false},
    productQuantity:{type:DataTypes.INTEGER,allowNull:false},
    unitPrice:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    total:{type:DataTypes.DECIMAL(10,2),allowNull:false},
},{
    timestamps:true
});
module.exports=BillItem;