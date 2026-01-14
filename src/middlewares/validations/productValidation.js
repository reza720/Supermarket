const {body,validationResult}=require("express-validator");

const ProductValidation={
    rules:[
        body("name")
            .notEmpty().withMessage("Name is required"),
        body("price")
            .notEmpty().withMessage("Price is required")
            .isFloat({min:0}).withMessage("Price cannot be negative"),
    ],

    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.status=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
}
module.exports=ProductValidation;