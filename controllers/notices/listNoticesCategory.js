const { Notice } = require("../../models/notice");

const listNoticeCategory = async (req, res) => {
  const { category } = req.params;
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;
  const notices = await Notice.find(
    { category },
    "-createdAt -updatedAt -idCloudAvatar",
    {
      skip,
      limit,
    }
  ).sort({ createdAt: -1 });
  res.status(200).json({ notices, page, per_page: limit });
};

module.exports = listNoticeCategory;
