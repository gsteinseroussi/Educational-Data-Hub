const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  editorDocLink: { type: String, default: "" },
  articleName: { type: String, default: "" },
  gradeLevel: [{ type: String, default: "" }],
  subject: { type: String, default: "" },
  authorName: { type: String, default: "" },
  articleAbstract: { type: String, default: "" },
  fileArray: [{ type: Schema.Types.ObjectId, ref: "file" }],
  fileID: {
    type: String,
    required: false,
    default: "",
  },
  claimed: { type: Boolean, default: false },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
