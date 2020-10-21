const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Comments = require("../../database/models/comments");
const Lesson = require("../../database/models/lesson");

// api route to view comments in the database
// router.get("/:id", (req, res) => {
//   Comments.findByIdAndUpdate({})
//     .then((response) => res.json(response))
//     .catch((err) => console.log(err));
// });

// api route to create new comments
router.post("/submit/:id", (req, res) => {
  console.log("USER", req.user);
  Comments.create({ message: req.body.comment, userName: req.user.username })
    .then(({ _id }) => {
      console.log("req.params.id", req.params.id);
      console.log("_id", _id);

      return Lesson.findById(req.params.id);

      return Lesson.findByIdAndUpdate(
        req.params.id,
        {
          authorName: "einstein",
          // $push: { commentArray: mongoose.Types.ObjectId(_id) },
        },
        { new: true }
      );
    })
    .then((lesson) => {
      console.log("lesson", lesson);
      res.json(lesson);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
