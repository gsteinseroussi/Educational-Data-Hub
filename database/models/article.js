const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  docLink: { type: String },
  articleName: { type: String, required: true },
  authorName: { type: String, required: true },
  articleAbstract: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
