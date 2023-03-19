const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
// const { sendEmail } = require("../../helpers");
const { v4 } = require("uuid");

const register = async (req, res) => {
  const { password, email, name, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Provided email already exists");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  // const verificationEmailToken = v4();
  const newUser = await User.create({
    password: hashPassword,
    email,
    name,
    city,
    phone,
    avatarURL,
  });
  // const mail = {
  //   to: email,
  //   subject: " Registration confirmation",
  //   html: `<a href="http://localhost:3000/api/auth/verify/${verificationEmailToken}" target="_blank">Click for email confirmation</a>`,
  // };
  //   await sendEmail(mail);
  res.status(201).json({
    user: {
      id: newUser._id,
      email,
      name,
      avatarURL,
    },
  });
};

module.exports = register;
