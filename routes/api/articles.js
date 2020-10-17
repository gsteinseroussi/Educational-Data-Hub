const express = require("express");
const router = express.Router();
const articlesController = require("../../controllers/articlesController");

//Matches with "/api/articles"
router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

  router
  .route("/gradelevel")
  .get(articlesController.findByGradeLevel);

//Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
