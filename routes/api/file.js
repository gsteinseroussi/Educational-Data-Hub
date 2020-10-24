const path = require("path");
const express = require("express");
const multer = require("multer");
const File = require("../../database/models/file");
const router = express.Router();



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

//post file route
router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    console.log("req-body and file", req.body, req.file);
    try {
      const { title, description, articleID } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        articleID,
        file_path: path,
        file_mimetype: mimetype
      });
      console.log(file)
      await file.save();
      console.log(file)
      res.json({message: "file uploaded succesfully", file});
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
router.get("/getAllFiles", async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("error while getting list of files");
  }
});

//getFilebyArticleId
router.get("/getFilebyArticleID", async (req, res) => {
  try {
    const fileID = req.body.fileID
    const file = await File.findById({fileID});
    res.send(file);
  } catch (error) {
    res.status(400).send("error while getting file for article");
  }
  
})

//download by id route
router.get('/download/:id', async (req, res) => {
  console.log("in download route", __dirname, path.join(__dirname, '..'))
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '../..', file.file_path));
  } catch (error) {
    res.status(400).send("Error downloading file.");
  }
});



module.exports = router;
