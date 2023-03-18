const { Notice } = require("../../models/notice");

// const listNoticeCategoryController = async (req, res, next) => {
//   const notices = await noticeService.listNoticeCategory(req);
// };

const addNotice = async (req, res, next) => {
  //   const { _id: owner } = req.user;
  const notice = new Notice(req.body);

  await notice.save();

  res.status(200).json({ data: notice, status: "success" });
};

module.exports = addNotice;
