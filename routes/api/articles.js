const express = require("express");
const { claimArticle } = require("../../controllers/articlesController");
const router = express.Router();
const articlesController = require("../../controllers/articlesController");

//Matches with "/api/articles"
router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

//Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  // .put(articlesController.claimArticle)
  .delete(articlesController.remove);

  router.route("/claimed/:id")
  .put(articlesController.claimArticle);

  router
  .route("/comment/:id")
  .put(articlesController.updateComment)

module.exports = router;
