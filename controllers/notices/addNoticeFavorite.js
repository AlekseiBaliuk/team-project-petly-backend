const { Notice } = require("../../models/notice");
const { HttpError } = require("../../helpers");

const addNoticeFavorite = async (req, res, next) => {
  const { _id: userId } = req.user;

  const { id } = req.params;

  const notice = await Notice.findOne({ _id: id });

  const { favorite } = notice;
  console.log(favorite);

  if (favorite.includes(userId)) {
    throw HttpError(409, "Notice already added to favorites");
  }
  favorite.push(userId);

  const newNotice = await Notice.findOneAndUpdate(
    { _id: id },
    { favorite: favorite },
    { new: true }
  );

  res.status(200).json({ notice: newNotice, status: "success" });
};

module.exports = addNoticeFavorite;
