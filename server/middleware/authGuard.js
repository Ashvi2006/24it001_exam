
function authGuard(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader !== "Bearer quickbyte-demo-token") {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Valid token required."
    });
  }

  next();
}

module.exports = authGuard;
