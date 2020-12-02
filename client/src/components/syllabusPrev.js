// importing dependencies and files
import React, { useState } from "react";
import "./edBrowseEtc.css";
import download from "downloadjs";
import axios from "axios";
import API from "../utils/lessonAPI";

// Syllabus Prev component
const SyllabusPrev = (props) => {
  const [lesson, setLesson] = useState(null);
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`/api/files/download/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("error downloading file");
      }
    }
  };

  // display the HTML
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Lesson Plan Preview</h2>
          <h4>Title: {props.selectedLesson?.lessonName}</h4>
          <p>Grade Range: {props.selectedLesson?.gradeLevel?.join(", ")}</p>
          <p>Author: {props.selectedLesson?.authorName}</p>
          <p>Description: {props.selectedLesson?.lessonAbstract}</p>
          <a
            href="#/"
            onClick={() =>
              downloadFile(
                lesson.fileArray[0]._id,
                lesson.fileArray[0].file_path,
                lesson.fileArray[0].file_mimetype
              )
            }
          >
            Download Lesson File
          </a>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
