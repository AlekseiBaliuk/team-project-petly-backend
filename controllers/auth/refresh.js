const { User } = require("../../models");
const HttpError = require("../../helpers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refresh = async (req, res) => {
  const { refreshToken: token } = req.body;
  console.log(token);
  try {
    const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
    console.log(id);
    const isExist = await User.findOne({ refreshToken: token });
    console.log(isExist);
    if (!isExist) {
      throw HttpError(403, "Invalid token");
    }
    const payload = {
      id,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "3m",
    });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    throw HttpError(403, error.message);
  }
};
module.exports = refresh;
