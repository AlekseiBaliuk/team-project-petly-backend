const noticeService = require("../services/notice");

const listNoticeCategoryController = async (req, res, next) => {
  const notices = await noticeService.listNoticeCategory(req);
  res.status(200).json({ data: notices, status: "success" });
};

const addNoticeController = async (req, res, next) => {
  const newNotice = await noticeService.addNotice(req);
  res.status(201).json({ data: newNotice, status: "success" });
};

module.exports = {
  addNoticeController,
  listNoticeCategoryController,
};
