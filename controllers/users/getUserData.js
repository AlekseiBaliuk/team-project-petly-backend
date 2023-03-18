const getUserData = async (req, res) => {
  const { _id: id, name, email, city, phone, birthday, avatarUrl } = req.user;

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
    },
  });
};

module.exports = getUserData;
