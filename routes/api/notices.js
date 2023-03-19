const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { validation, isValidPetId, auth } = require("../../middlewares");

const { joiNoticesSchema } = require("../../models/notice");

const { notices: ctrl } = require("../../controllers");

router.post(
  "/",
  auth,
  validation(joiNoticesSchema),
  ctrlWrapper(ctrl.addNotice)
);
router.get("/category/:category", ctrlWrapper(ctrl.listNoticeCategory));
router.get("/:id", isValidPetId, ctrlWrapper(ctrl.getNoticeById));
router.post(
  "/favorites/:id",
  isValidPetId,
  auth,
  ctrlWrapper(ctrl.addNoticeFavorite)
);

module.exports = router;
