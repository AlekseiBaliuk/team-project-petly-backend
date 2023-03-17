const { User } = require("../../models");
const HttpErrors = require("../../helpers/HttpError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpErrors(409, error.message);
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw HttpErrors(401, "Password is wrong");
  }
  // if (!user.verify) {
  //   throw HttpErrors(403, " Email is not verified");
  // }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
