const express = require("express");

const { users: userCtrl } = require("../../controllers");
const { userPets: petCtrl } = require("../../controllers");

const { validation, auth } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(userCtrl.getUserData));

router.get("/pets", ctrlWrapper(petCtrl.getUserPets));

module.exports = router;
