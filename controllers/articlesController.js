const db = require("../database/models");
const url = require("url");
//defining methods for articlesController
module.exports = {
  findAll: function (req, res) {
    db.Article.find({})
      .sort({ date: -1 })
      .populate("fileArray")
      // .limit(2)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByGradeLevel: function (req, res) {
    console.log(req.url);

    const k5 = req.query["k-5"];
    const sixEight = req.query["6-8"];
    const nineTwelve = req.query["9-12"];

    const gradeLevels = [];

    if (k5 === "true") gradeLevels.push("k-5");
    if (sixEight === "true") gradeLevels.push("6-8");
    if (nineTwelve === "true") gradeLevels.push("9-12");

    console.log("GRADE LEVELS", { gradeLevels });
    // Need to create in API route for getting by grade levels
    // Use this controller method
    // Update line 30 to find by items within the array
    db.Article.find({ gradeLevel: { $contains: gradeLevels } })
      .sort({ date: -1 })
      .limit(5)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Article.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Article.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log("req.body", req.body);
    db.Article.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { fileArray: req.body.fileID } }
    ).then((dbModel) =>
      res.json(dbModel).catch((err) => res.status(422).json(err))
    );
  },

  updateComment: function (req, res) {
    db.Article.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { commentArray: req.body.comment } }
    ).then((dbModel) =>
      res.json(dbModel).catch((err) => res.status(422).json(err))
    );
  },

  remove: function (req, res) {
    db.Article.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  claimArticle: function (req, res) {
    console.log(req.body);
    db.Article.findOneAndUpdate(
      { _id: req.params.id },
      { claimed: req.body.claimed }
    )
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
};
