const { Friend } = require("./friend");
const { User } = require("./user");
const { UserPet } = require("./userPets");
const { userPetSchema } = require("./userPets");
const { Notice } = require("./notice");
const { News } = require("./News");

module.exports = { User, UserPet, userPetSchema, Notice, News, Friend };
