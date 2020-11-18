// importing dependencies and files
import React from "react";
import Comments from "./comments";
import "./edBrowseEtc.css";

// component for review
const Reviews = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2 className="card-title">Lesson Plan Reviews</h2>
          <p>
            Read what other educators think about the lesson plan & add your own
            thoughts.
          </p>
          <Comments
            viewDetails={props.viewDetails}
            lessonID={props.lessonID}
            lesson={props.lesson}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
