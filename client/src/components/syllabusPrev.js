import { PromiseProvider } from "mongoose";
import React from "react";

const SyllabusPrev = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Lesson Plan Preview</h2>
          <h3>Lesson Name: {props.selectedLesson.lessonName}</h3>
          <p>Grade Level: {props.selectedLesson?.gradeLevel?.join(", ")}</p>
          <p> Author Name: {props.selectedLesson.authorName}</p>
          <p>Lesson Abstract: {props.selectedLesson.lessonAbstract}</p>
          <p>
            <a
              href={"http://" + props.selectedLesson.researchDocLink}
              target="_blank"
            >
              Google Doc Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
