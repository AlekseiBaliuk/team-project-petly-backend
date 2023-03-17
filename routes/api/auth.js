const express = require("express");
const router = express.Router();

const { auth: ctrl } = require("../../controllers");

const { validation, auth } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

module.exports = router;
