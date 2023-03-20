const { Notice } = require("../../models/notice");

const listNoticeTitle = async (req, res) => {
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
  ).sort({ createdAt: -1 });
  res.status(200).json(notices);
};

module.exports = listNoticeTitle;
