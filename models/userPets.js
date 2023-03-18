const { Schema, model } = require("mongoose");
const Joi = require("joi");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    birthday: {
      type: Date,
      required: [true, "Birthday is required"],
    },
    breed: {
      type: String,
      required: [true, "Breed is required"],
    },
    petsPhotoURL: {
      type: String,
      default: null,
    },
    comments: {
      type: String,
      required: [true, "Image is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    idCloudAvatar: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const UserPet = model("pet", petSchema);

const userPetSchema = Joi.object({
  name: Joi.string()
    .trim(true)
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  birthday: Joi.date().required(),
  breed: Joi.string()
    .trim(true)
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  comments: Joi.string().trim(true).min(8).max(120).required(),
});

module.exports = { UserPet, userPetSchema };
