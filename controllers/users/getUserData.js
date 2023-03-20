const { UserPet } = require("../../models");

const getUserData = async (req, res) => {
  const {
    _id: id,
    name,
    email,
    location,
    phone,
    birthday,
    avatarURL,
  } = req.user;
  const userPet = await UserPet.find(
    { owner: id },
    "-createdAt -updatedAt -idCloudAvatar"
  );

  res.status(200).json({
    user: {
      id,
      name,
      email,
      location,
      phone,
      birthday,
      avatarURL,
    },
    userPet,
  });
};

module.exports = getUserData;
