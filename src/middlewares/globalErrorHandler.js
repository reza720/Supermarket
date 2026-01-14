const globalErrorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  let message = err.message || "Internal Server Error";
  let errors = [];

  if (err.errors && Array.isArray(err.errors) && err.errors[0].param) {
    errors = err.errors.map(e => ({
      field: e.param,
      message: e.msg
    }));
  }
  else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    errors = err.errors.map(e => ({
      field: e.path,
      value: e.value,
      message: e.message
    }));

    message = err.name === "SequelizeUniqueConstraintError" ? "Duplicate entry" : "Validation error";
  }
  res.status(status).json({
    success: false,
    message,
    errors: errors.length ? errors : undefined 
  });
};

module.exports = globalErrorHandler;
