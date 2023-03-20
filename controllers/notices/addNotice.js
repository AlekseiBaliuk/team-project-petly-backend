const { Notice } = require("../../models/notice");
const { cloudinaryImgUpload } = require("../../helpers");

const addNotice = async (req, res, next) => {
  const { avatarURL, idCloudAvatar } = await cloudinaryImgUpload(req);
  const { _id: owner } = req.user;

  const notice = new Notice({ ...req.body, avatarURL, idCloudAvatar, owner });

  await notice.save();

  res.status(200).json(notice);
};

module.exports = addNotice;
