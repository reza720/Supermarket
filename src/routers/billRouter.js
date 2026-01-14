const express=require("express");
const router=express.Router();
const {BillController}=require("../controllers");

router.post("/",BillController.createBill);
router.get("/",BillController.getBills);
router.get("/:id",BillController.getBillById);
router.put("/:id",BillController.updateBill);
router.delete("/:id",BillController.deleteBill);

module.exports=router;