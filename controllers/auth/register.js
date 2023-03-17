const { User } = require("../../models");
const HttpErrors = require("../../helpers/HttpError");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
// const { sendEmail } = require("../../helpers");
const { v4 } = require("uuid");

const register = async (req, res) => {
  const { password, email, name, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpErrors(409, error.message);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  // const verificationEmailToken = v4();
  const result = await User.create({
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
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarURL,
      },
    },
  });
};

module.exports = register;
