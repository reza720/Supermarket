const globalErrorHandler = (err, req, res, next) => {
  console.error(err); // Keep full error in console for debugging

  // Default status and message
  const status = err.status || 500;
  let message = err.message || "Internal Server Error";
  let errors = [];

  // Handle express-validator errors
  if (err.errors && Array.isArray(err.errors) && err.errors[0].param) {
    errors = err.errors.map(e => ({
      field: e.param,
      message: e.msg
    }));
  }

  // Handle Sequelize validation errors
  else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    errors = err.errors.map(e => ({
      field: e.path,
      value: e.value,
      message: e.message
    }));

    // Optionally customize message
    message = err.name === "SequelizeUniqueConstraintError" ? "Duplicate entry" : "Validation error";
  }

  // Send structured response
  res.status(status).json({
    success: false,
    message,
    errors: errors.length ? errors : undefined // only include if errors exist
  });
};

module.exports = globalErrorHandler;
