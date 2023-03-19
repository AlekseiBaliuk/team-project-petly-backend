const { Notice } = require("../../models/notice");
const { HttpError } = require("../../helpers");

const addNoticeFavorite = async (req, res, next) => {
  const { _id: userId } = req.user;

  const { id } = req.params;

  const notice = await Notice.findOne({ _id: id });

  const { favorite } = notice;

  // const isNoticeAddFavorite = favorite.find(userId);
  // console.log("Favorite", favorite);
  // console.log(isNoticeAddFavorite);

  // if (favorite.find(userId)) {
  //   throw HttpError(409, "Notice already added to favorites");
  // }
  favorite.push(userId);

  const newNotice = await Notice.findOneAndUpdate(
    { _id: id },
    { favorite: favorite },
    { new: true }
  );

  res.status(200).json({ notice: newNotice, status: "success" });
};

module.exports = addNoticeFavorite;
