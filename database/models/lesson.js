const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  researchDocLink: { type: String },
  editorDocLink: { type: String, default: "" },
  lessonName: { type: String, default: "" },
  gradeLevel: [{ type: String, default: "" }],
  subject: { type: String, default: "" },
  authorName: { type: String, default: "" },
  lessonAbstract: { type: String, default: "" },
  commentArray: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  file: { type: Schema.Types.ObjectId, ref: "file" },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
