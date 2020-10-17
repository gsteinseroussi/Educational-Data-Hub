const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: { type: String, required: true},
  userName: { type: String },
  date: { type: Date, default: Date.now}
  
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
