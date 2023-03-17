const getUserData = async (req, res) => {
  const {
    _id: id,
    name,
    email,
    city,
    phone,
    birthday,
    avatarUrl,
  } = req.user;

  res.json({
    user: {
      id,
      name,
      email,
      city,
      phone,
      birthday,
      avatarUrl,
    },
  });
};

module.exports = getUserData;
