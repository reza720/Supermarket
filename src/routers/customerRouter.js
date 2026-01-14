const {CustomerController}=require("../controllers");
const express=require("express");
const router=express.Router();
const {CustomerValidation}=require("../middlewares/validations");

router.post("/",CustomerValidation.rules,CustomerValidation.errorHandler, CustomerController.createCustomer);
router.get("/",CustomerController.getCustomers);
router.get("/:id",CustomerController.getCustomerById);
router.put("/:id",CustomerValidation.rules, CustomerValidation.errorHandler, CustomerController.updateCustomer);
router.delete("/:id",CustomerController.deleteCustomer);

module.exports=router;
