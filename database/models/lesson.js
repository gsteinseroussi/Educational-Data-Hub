const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  researchDocLink: { type: String },
  editorDocLink: { type: String, default: ""},
  articleName: { type: String, default: "" },
  gradeLevel: [{ type: String, default: "" }],
  subject: { type: String, default: "" },
  authorName: { type: String, default: "" },
  articleAbstract: { type: String, default: "" },
  commentArray: [{ type: String, required: true}],
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
