const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { validation, auth } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

// router.get(
//   "/verify/:verificationToken",
//   ctrlWrapper(ctrl.verifyEmail)
// );

// router.post(
//   "/verify",
//   validation(joiVerifyEmailSchema),
//   ctrlWrapper(ctrl.resendVerifyEmail)
// );

module.exports = router;
