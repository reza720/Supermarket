const {body,validationResult}=require("express-validator");

const CustomerValidation={
  rules:[
    body("name")
      .notEmpty().withMessage("Name is required")
      .matches(/^[a-zA-Z ]+$/).withMessage("Name should contain only letters and spaces"),

    body("phone")
      .notEmpty().withMessage("Phone is required")
      .isLength({ min: 10, max: 10 }).withMessage("Phone number should be 10 digits")
      .isNumeric().withMessage("Phone number must be digits")
  ],

  errorHandler: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation Failed");
      err.status = 400;
      err.errors = errors.array();
      return next(err); 
    }
    next();
  }
};
module.exports = CustomerValidation;
