const { News } = require("../../models");

const getNews = async (req, res) => {
  const news = await News.find({});

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      news,
    },
  });
};

module.exports = getNews;
