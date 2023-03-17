const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { petId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, "Invalid petId"));
  }
  next();
};

module.exports = isValidId;
