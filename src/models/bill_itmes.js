const sequelize=require("../config/database");
const {DataTypes, INTEGER}=require("sequelize");

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
// BillItem Hooks
BillItem.beforeCreate(item =>{
    item.total=item.productQuantity*item.unitPrice;
});

BillItem.beforeUpdate(item =>{
    item.total=item.productQuantity*item.unitPrice;
});

//Bill Hooks
async function updateBillTotal(billId) {
    const {Bill}=sequelize.models;
    const total=await BillItem.sum("total",{where:{billId}});
    await Bill.update({total:total||0},{where:{id:billId}});
}

BillItem.afterCreate(item => updateBillTotal(item.billId));
BillItem.afterDestroy(item => updateBillTotal(item.billId));
BillItem.afterUpdate(item => updateBillTotal(item.billId));

module.exports=BillItem;