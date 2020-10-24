import React from "react";
import Comments from "./comments";

const Reviews = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2 className="card-title">Lesson Plan Reviews</h2>
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
