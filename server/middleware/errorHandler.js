
function errorHandler(err, req, res, next) {
  console.error(err.stack || err.message);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.status ? err.message : "Internal Server Error"
  });
}

module.exports = errorHandler;
