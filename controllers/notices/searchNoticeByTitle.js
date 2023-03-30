const { Notice } = require("../../models/notice");

const searchNoticeByTitle = async (req, res) => {
  const { title } = req.params;
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;
  const notices = await Notice.find(
    { title: { $regex: new RegExp(title, "i") } },
    "-createdAt -updatedAt -idCloudAvatar",
    {
      skip,
      limit,
    }
  )
    .sort({ createdAt: -1 })
    .populate("owner", "email phone");

  const total = await Notice.find({
    title: { $regex: new RegExp(title, "i") },
  }).count();
  res.status(200).json({ notices, page, per_page: limit, total });
};

module.exports = searchNoticeByTitle;