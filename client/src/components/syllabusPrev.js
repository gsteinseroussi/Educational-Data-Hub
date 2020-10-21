import { PromiseProvider } from "mongoose";
import React from "react";
// import Sample from "../images/Sample.png";

const SyllabusPrev = (props) => {
  return (
    <div className="syllabus card">
      <div className="card-body">
        <div className="searchContainer">
          {/* Instead of "Selected Learning Module" use {} to supply the title of the selected item */}
          <h2>Preview Selected Learning Module</h2>
  <h3>{props.selectedLesson.lessonName}</h3>
  <h3>{props.selectedLesson?.gradeLevel?.join(", ")}</h3>
  <h3>{props.selectedLesson.authorName}</h3>
  <h3>{props.selectedLesson.lessonAbstract}</h3>
          <p>
            (This sample static learning module demonstrates what a module
            selected from the search results would show.)
          </p>
          {/* <img src={Sample} alt="sample"></img> */}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
