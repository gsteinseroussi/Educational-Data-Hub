import React from "react";
import GradeSelector from "./gradeSelector";
import EducatorResults from "./educatorResults";
// import SubjectSelector from "./subjectSelector";

const EducatorBrowse = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Browse Fields</h2>
          <p>Browse Lesson plans by grades.</p>
          <form>
            <GradeSelector />
            <input type="submit" value="Submit"></input>
          </form>
          <div className="p-4 educatorResults">
            <EducatorResults />
            {/* <SubjectSelector /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorBrowse;
