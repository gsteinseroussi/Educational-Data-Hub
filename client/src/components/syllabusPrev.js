import React from "react";
import Sample from "../images/Sample.png";

const SyllabusPrev = () => {
  return (
    <div className="syllabus card">
      <div className="card-body">
        <div className="searchContainer">
          {/* Instead of "Selected Learning Module" use {} to supply the title of the selected item */}
          <h2>Preview Selected Learning Module</h2>
          <p>
            (This sample static learning module demonstrates what a module
            selected from the search results would show.)
          </p>
          <img src={Sample} alt="sample"></img>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPrev;
