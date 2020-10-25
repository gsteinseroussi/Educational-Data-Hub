import { PromiseProvider } from "mongoose";
import React from "react";
import "./edBrowseEtc.css";

const SyllabusPrev = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Lesson Plan Preview</h2>
          <h4>Title: {props.selectedLesson?.lessonName}</h4>
          <p>Grade Range: {props.selectedLesson?.gradeLevel?.join(", ")}</p>
          <p>Author: {props.selectedLesson?.authorName}</p>
          <p>Description: {props.selectedLesson?.lessonAbstract}</p>
          <p>
            <a
              href={"http://" + props.selectedLesson?.researchDocLink}
              target="_blank"
            >
              {props.selectedLesson?.lessonName}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
