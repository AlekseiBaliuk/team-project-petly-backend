const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidPetId = (req, res, next) => {
  const { id: petId } = req.params;
  if (!isValidObjectId(petId)) {
    next(HttpError(404, "Invalid petId"));
  }
  next();
};

module.exports = isValidPetId;
