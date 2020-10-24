const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      retuired: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    },
    articleID: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const File = mongoose.model("file", fileSchema);
module.exports = File;
