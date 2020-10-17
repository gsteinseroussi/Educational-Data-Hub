const path = require("path");
const express = require("express");
const multer = require("multer");
const File = require("../../database/models/file");
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size: 10 MB
  },
  fileFilter(req, file, cb) {
    if (
      !file.originalname.match(
        /\.(jpeg|jpg|JPG|png|pdf|PDF|doc|docx|xlsx|xls)$/
      )
    ) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); //continue with upload
  }
});

Router.post(
  "/",
  upload.single("file"),
  async (req, res) => {
    console.log("req-body and file", req.body, req.file);
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send("file uploaded succesfully.");
    } catch (error) {
      res.status(400).send("error while uploading file");
    }
  },
  (error, req, res, next) => {
    console.log(error);
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

//getAllFiles route

//download by id route

module.exports = Router;
