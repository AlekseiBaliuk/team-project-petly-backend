const { Notice } = require("../../models/notice");

const addNotice = async (req, res, next) => {
  const { _id: owner } = req.user;

  const notice = new Notice({ ...req.body, owner });

  await notice.save();

  res.status(200).json({ notice, status: "success" });
};

module.exports = addNotice;
