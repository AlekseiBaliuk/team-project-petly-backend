const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    city: {
      type: String,
      required: [true, "City/region is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    birthday: {
      type: String,
      default: "00.00.0000",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    // verify: {
    //   type: Boolean,
    //   default: false,
    // },
    // verificationToken: {
    //   type: String,
    //   required: [true, "Verify token is required"],
    // },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

// const joiVerifyEmailSchema = Joi.object({
//   email: Joi.string().required(),
// });

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
};
