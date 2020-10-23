import { PromiseProvider } from "mongoose";
import React from "react";
// import Sample from "../images/Sample.png";

const SyllabusPrev = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Lesson Plan Preview</h2>
          <h3>{props.selectedLesson.lessonName}</h3>
          <p>{props.selectedLesson?.gradeLevel?.join(", ")}</p>
          <p>{props.selectedLesson.authorName}</p>
          <p>{props.selectedLesson.lessonAbstract}</p>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
