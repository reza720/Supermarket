const express=require("express");
const router=express.Router();
const CustomerRouter=require("./customerRouter");
const ProductRouter=require("./productRouter");
const BillRouter=require("./billRouter");
const Bill_ItemsRouter=require("./bill_ItemsRouter");

router.use("/customers",CustomerRouter);
router.use("/products",ProductRouter);
router.use("/bills",BillRouter);
router.use("/billItems",Bill_ItemsRouter);

module.exports=router;