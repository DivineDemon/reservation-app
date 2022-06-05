import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandler.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return next(errorHandler(403, "Invalid Token!"));
      req.user = user;
      next();
    });
  } else {
    return next(errorHandler(401, "User Unauthorized!"));
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, "User Unauthorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, "User Unauthorized!"));
    }
  });
};
