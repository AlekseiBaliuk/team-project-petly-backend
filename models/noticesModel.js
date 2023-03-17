const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost_found", "for_free"],
    },
    title: {
      type: String,
      minlength: 2,
      maxlength: 48,
    },
    name: {
      type: String,
    },
    birthdate: {
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
    image: {
      type: String,
    },
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

const Notice = mongoose.model("notice", noticeSchema);

module.exports = {
  Notice,
};
