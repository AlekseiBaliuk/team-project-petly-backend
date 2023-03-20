const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { validation, isValidPetId, auth } = require("../../middlewares");

const { joiNoticesSchema } = require("../../models/notice");

const { notices: ctrl } = require("../../controllers");

router.get("/category/:category", ctrlWrapper(ctrl.listNoticeCategory));
router.get("/title/:title", ctrlWrapper(ctrl.listNoticeTitle));
router.get("/:id", isValidPetId, ctrlWrapper(ctrl.getNoticeById));
router.get("/user/favorite", auth, ctrlWrapper(ctrl.listUserFavorite));
router.get("/", auth, ctrlWrapper(ctrl.listUserNotices));
router.post(
  "/",
  auth,
  validation(joiNoticesSchema),
  ctrlWrapper(ctrl.addNotice)
);
router.post(
  "/favorites/:id",
  isValidPetId,
  auth,
  ctrlWrapper(ctrl.addNoticeFavorite)
);

router.delete(
  "/favorites/:id",
  isValidPetId,
  auth,
  ctrlWrapper(ctrl.delNoticeFavorite)
);
router.delete("/:id", isValidPetId, auth, ctrlWrapper(ctrl.delUserNotice));

module.exports = router;
