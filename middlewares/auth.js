const { User } = require("../models");
const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { ACCESS_SECRET_KEY } = process.env;
const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }
  if (!token) {
    next(HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.accessToken) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;

    next();
  } catch (error) {
    if ((error.message = "Invalid signature")) {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
