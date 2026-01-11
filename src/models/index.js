const sequelize=require("../config/database");

const Product=require("./product");
const Customer=require("./customer");
const Bill=require("./bill");
const Bill_Items=require("./bill_items");

Customer.hasMany(Bill, {foreignKey:"customerId"});
Bill.belongsTo(Customer, {foreignKey:"customerId"});

Product.belongsToMany(Bill, {through:Bill_Items,foreignKey:"productId"});
Bill.belongsToMany(Product, {through:Bill_Items, foreignKey:"billId"});

module.exports={
    Product,
    Customer,
    Bill,
    Bill_Items
};


