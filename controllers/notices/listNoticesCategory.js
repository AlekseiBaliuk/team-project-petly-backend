const { Notice } = require("../../models/notice");

const listNoticeCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;
  const notices = await Notice.find({ category }, "-createdAt -updatedAt ", {
    skip,
    limit,
  }).sort({ createdAt: -1 });
  res.status(200).json({ notices, skip, limit });
};

module.exports = listNoticeCategory;
