const { User } = require("../models");
const { HttpErrors } = require("../helpers");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { SECRET_KEY } = process.env;
const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new HttpErrors(401, "Not authorized");
  }
  if (!token) {
    throw new HttpErrors(401, "Not authorized");
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new HttpErrors(401, "Not authorized");
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
