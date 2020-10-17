const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  researchDocLink: { type: String },
  editorDocLink: { type: String, default: ""},
  articleName: { type: String, default: "" },
  gradeLevel: [{ type: String, default: "" }],
  subject: { type: String, default: "" },
  authorName: { type: String, default: "" },
  articleAbstract: { type: String, default: "" },
  claimed: { type: Boolean, default: false}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
