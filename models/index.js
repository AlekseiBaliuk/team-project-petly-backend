const { Friend } = require("./friend");
const { User } = require("./user");
const { UserPet } = require("./userPets");

const {userPetSchema} = require('./userPets')

module.exports = { Friend, User, UserPet, userPetSchema };
