const { Friend } = require("../../models");

const getFriends = async (req, res) => {
  const friends = await Friend.find({});

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      friends,
    },
  });
};

module.exports = getFriends;
