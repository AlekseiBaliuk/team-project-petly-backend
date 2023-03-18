const { UserPet } = require("../../models");
const { cloudinaryImgUpload } = require("../../helpers");

const addPet = async (req, res) => {
  const { avatarURL, idCloudAvatar } = await cloudinaryImgUpload(req);

  const { _id: owner } = req.user;

  const { _id, name, birthday, breed, comments } = await UserPet.create({
    ...req.body,
    petsPhotoURL: avatarURL,
    owner,
    idCloudAvatar,
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newPet: {
        _id,
        name,
        birthday,
        breed,
        petsPhotoURL: avatarURL,
        comments,
        owner,
      },
    },
  });
};

module.exports = addPet;
