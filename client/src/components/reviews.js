import React from "react";

const Reviews = () => {
  return (
    <div className="review card">
      <div className="card-body">
        <div className="searchContainer">
          {/* Instead of "Learning Module" in h2, use {} to enter the name of the selected item */}
          <h2 className="card-title">Learning Module Reviews</h2>
          <h3>*STAR RATING SYSTEM HERE*</h3>
          <h5>Review Title</h5>
          <p>
            This module offered great rationale for teaching thermodynamics to
            elemenatary students, and offered tools that they can all find at
            home. The directions are clear. No injuries have been reported.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
