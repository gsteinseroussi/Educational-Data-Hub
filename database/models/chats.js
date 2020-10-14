const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  message: { type: String },
  userName: { type: String },
  date: { type: Date, default: Date.now}
  
});

const Chats = mongoose.model("Chats", chatSchema);

module.exports = Chats;
