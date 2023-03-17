const { Notice } = require("../models/noticesModel");

const listNoticeCategory = async (req) => {
  // const { _id: owner } = req.user;
  const { category } = req.params;
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;
  const notices = await Notice.find({ category }, "-createdAt -updatedAt ", {
    skip,
    limit,
  });
  return { page, per_page: limit, notices };
};

const addNotice = async (req) => {
  //   const { _id: owner } = req.user;
  const newNotice = new Notice(req.body);

  await newNotice.save();
  return newNotice;
};

module.exports = {
  addNotice,
  listNoticeCategory,
};
