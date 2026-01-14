const express= require("express");
const router=express.Router();
const {ProductValidation}=require("../middlewares/validations");
const {ProductController}=require("../controllers");

router.post("/",ProductValidation.rules, ProductValidation.errorHandler, ProductController.createProduct);
router.get("/",ProductController.getProducts);
router.get("/:id",ProductController.getProductById);
router.put("/:id",ProductValidation.rules,ProductValidation.errorHandler, ProductController.updateProduct);
router.delete("/:id",ProductController.deleteProduct);

module.exports=router;
