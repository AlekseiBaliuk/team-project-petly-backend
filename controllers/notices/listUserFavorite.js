const { Notice } = require("../../models/notice");

const listUserFavorite = async (req, res) => {
  const { _id: userId } = req.user;
  const { page, limit } = req.query;

  console.log(userId);

  const skip = (page - 1) * limit;

  const notice = await Notice.find(
    {
      favorite: { $in: userId },
    },
    "-createdAt -updatedAt ",
    {
      skip,
      limit,
    }
  ).sort({
    createdAt: -1,
  });

  res.status(200).json(notice);
};

module.exports = listUserFavorite;
