const {Bill_ItemsController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",Bill_ItemsController.createBill_Items);
router.get("/",Bill_ItemsController.getBill_Items);
router.get("/:id",Bill_ItemsController.getBill_ItemsById);
router.put("/:id",Bill_ItemsController.updateBill_Items);
router.delete("/:id",Bill_ItemsController.deleteBill_Items);

module.exports=router;