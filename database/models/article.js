const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  researchDocLink: { type: String },
  editorDocLink: { type: String, required: false},
  articleName: { type: String, required: false },
  gradeLevel: [{ type: String, required: false }],
  subject: { type: String, required: false },
  authorName: { type: String, required: false },
  articleAbstract: { type: String, required: false },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
