const express = require("express");
const router = express.Router();

// const {
//   contactsValidation,
//   favoriteValidation,
// } = require("../middlewares/validationMiddleware");

// const { asyncWrapper } = require("../helpers/apiHelpers");
const noticesController = require("../../controllers/notices");

// const { userTokenMiddleware } = require("../middlewares/authMiddleware");

// router.use(userTokenMiddleware);

// router.get("/", asyncWrapper(listContactsController));

// router.get("/:id", asyncWrapper(getContactByIdController));

router.post("/", noticesController.addNoticeController);
router.get("/:category", noticesController.listNoticeCategoryController);

// router.delete("/:id", asyncWrapper(removeContactController));

// router.put("/:id", contactsValidation, asyncWrapper(updateContactController));

// router.patch(
//   "/:id/favorite",
//   favoriteValidation,
//   asyncWrapper(favoriteContactController)
// );

module.exports = router;
