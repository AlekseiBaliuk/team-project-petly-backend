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
    location: {
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
    idCloudAvatar: {
      type: String,
      default: null,
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
  email: Joi.string().min(7).max(63).email().required(),
  password: Joi.string().required(),
  name: Joi.string().alphanum().required(),
  location: Joi.string()
    .regex(/[A-Z][a-z]*,\s[A-Z][a-z]*/)
    .required(),
  phone: Joi.string()
    .length(13)
    .pattern(/^\+[380]{3}\d{7}/)
    .required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().min(7).max(63).email().required(),
  password: Joi.string().required(),
});

const userUpdateSchema = Joi.object({
  name: Joi.string().alphanum(),
  email: Joi.string().min(7).max(63).email(),
  birthday: Joi.date(),
  phone: Joi.string()
    .length(13)
    .pattern(/^\+[380]{3}\d{7}/),
  location: Joi.string().regex(/[A-Z][a-z]*,\s[A-Z][a-z]*/),
});

// const joiVerifyEmailSchema = Joi.object({
//   email: Joi.string().required(),
// });

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  userUpdateSchema,
};
