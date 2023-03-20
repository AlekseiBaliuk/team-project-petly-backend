const mongoose = require("mongoose");
const Joi = require("joi");
const { array } = require("joi");

const noticeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost-found", "in-good-hands"],
    },
    title: {
      type: String,
      minlength: 2,
      maxlength: 48,
    },
    name: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    breed: {
      type: String,
      minlength: 2,
      maxlength: 24,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    location: {
      type: String,
    },
    comments: {
      type: String,
      minlength: 8,
      maxlength: 120,
    },
    price: {
      type: Number,
    },
    avatarURL: {
      type: String,
    },
    price: {
      type: Number,
    },
    favorite: [],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const joiNoticesSchema = Joi.object({
  category: Joi.string().required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.date().required(),
  breed: Joi.string().min(2).max(24).required(),
  sex: Joi.string().required(),
  location: Joi.string().required(),
  comments: Joi.string().min(8).max(120).required(),
  price: Joi.number(),
  image: Joi.string(),
});

const Notice = mongoose.model("notice", noticeSchema);

module.exports = {
  Notice,
  joiNoticesSchema,
};
