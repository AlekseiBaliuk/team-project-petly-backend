const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { validation } = require("../../middlewares");
const { isValidId } = require("../../middlewares");

const { joiNoticesSchema } = require("../../models/notice");

const { notices: ctrl } = require("../../controllers");

router.post("/", validation(joiNoticesSchema), ctrlWrapper(ctrl.addNotice));
router.get("/category/:category", ctrlWrapper(ctrl.listNoticeCategory));
router.get("/:id", ctrlWrapper(ctrl.getNoticeById));

module.exports = router;
