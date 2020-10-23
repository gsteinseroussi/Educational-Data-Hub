import { PromiseProvider } from "mongoose";
import React from "react";
// import Sample from "../images/Sample.png";

const SyllabusPrev = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">

          {/* Instead of "Selected Learning Module" use {} to supply the title of the selected item */}
          <h2>Preview Selected: Learning Module</h2>
          <h3>Lesson Name: {props.selectedLesson.lessonName}</h3>
          <h3>Grade Level: {props.selectedLesson?.gradeLevel?.join(", ")}</h3>
          <h3> Author Name: {props.selectedLesson.authorName}</h3>
          <h3>Lesson Abstract: {props.selectedLesson.lessonAbstract}</h3>
          <h3>
            {" "}
            <a href={props.selectedLesson.researchDocLink} target="*">
              Google Doc Link
            </a>
          </h3>
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
