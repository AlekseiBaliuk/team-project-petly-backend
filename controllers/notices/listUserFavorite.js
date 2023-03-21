const { Notice } = require("../../models/notice");

const listUserFavorite = async (req, res) => {
  const { _id: userId } = req.user;
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;

  const notices = await Notice.find(
    {
      favorite: { $in: userId },
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).sort({
    createdAt: -1,
  });

  res.status(200).json({ page, per_page: limit, notices });
};

module.exports = listUserFavorite;
