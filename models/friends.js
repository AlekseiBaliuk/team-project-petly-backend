const { Schema, model } = require("mongoose");

const friendsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: String,
  addressUrl: String,
  imageUrl: String,
  address: String,
  workDays: [
    {
      isOpen: Boolean,
      from: String,
      to: String,
    },
  ],
  phone: String,
  email: String,
});

const Friend = model("friends", friendsSchema);

module.exports = Friend;
