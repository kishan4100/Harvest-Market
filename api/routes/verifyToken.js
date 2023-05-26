const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    1;
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(401).json("Token Not Valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Not Authenticated");
  }
};

const VerifyTokenAndAuthorization = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not Allowed");
    }
  });
};

const VerifyTokenAndAdmin = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not Allowed");
    }
  });
};

module.exports = {
  VerifyToken,
  VerifyTokenAndAuthorization,
  VerifyTokenAndAdmin,
};
