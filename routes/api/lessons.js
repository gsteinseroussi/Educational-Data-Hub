const express = require("express");
const router = express.Router();
const lessonsController = require("../../controllers/lessonsController");

//Matches with "/api/lessons"
router
  .route("/")
  .get(lessonsController.findAll)
  .post(lessonsController.create);

  router
  .route("/grades")
  .get(lessonsController.findByGradeLevel);

//Matches with "/api/lessons/:id"
router
  .route("/:id")
  .get(lessonsController.findById)
  .put(lessonsController.update)
  .delete(lessonsController.remove);

  router
  .route("/comment/:id")
  .put(lessonsController.updateComment)

module.exports = router;
