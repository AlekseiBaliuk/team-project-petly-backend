const { Notice } = require("../../models/notice");

const addNoticeFavorite = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = user;
  console.log(userId, id);

  //   const notice = new Notice({ ...req.body, owner });

  //   await notice.save();

  //   res.status(200).json({ data: notice, status: "success" });
};

module.exports = addNoticeFavorite;
