const { User } = require("../../models");

const changeData = async (req, res) => {
  const { email, name, city, phone, birthday } = req.body;
  const { _id } = req.user;
  let result;
  if (email) {
    result = await User.findByIdAndUpdate(_id, { email }, { new: true });
  }
  if (name) {
    result = await User.findByIdAndUpdate(_id, { name }, { new: true });
  }
  if (city) {
    result = await User.findByIdAndUpdate(_id, { city }, { new: true });
  }
  if (phone) {
    result = await User.findByIdAndUpdate(_id, { phone }, { new: true });
  }
  if (birthday) {
    result = await User.findByIdAndUpdate(_id, { birthday }, { new: true });
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "user's info updated",
    data: {
      result,
    },
  });
};

module.exports = changeData;
