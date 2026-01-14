const CustomerService=require("./customerService");
const BillService=require("./billService");
const ProductService=require("./productService");
const Bill_ItemsService=require("./bill_ItemsService");
const { Model } = require("sequelize");

module.exports={
    CustomerService,
    BillService,
    ProductService,
    Bill_ItemsService
};
