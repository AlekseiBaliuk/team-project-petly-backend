const { UserPet } = require("../../models");

const getUserData = async (req, res) => {
  const { _id: id, name, email, city, phone, birthday, avatarUrl } = req.user;
  const userPet = await UserPet.find({ owner: id });

  res.status(200).json({
    status: "success",
    code: 201,
    data: {
      user: {
        id,
        name,
        email,
        city,
        phone,
        birthday,
        avatarUrl,
      },
      userPet,
    },
  });
};

module.exports = getUserData;
