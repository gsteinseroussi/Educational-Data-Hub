import React from "react";
import GradeSelector from "./gradeSelector";
import SubjectSelector from "./subjectSelector";

const EducatorBrowse = () => {
    return (
        <div className="card">
      <div className="card-body">
        <div className="searchContainer">
    <h2>Browse Fields:</h2>
    <p>Browse Lesson plans by grade level, subjects, learning competencies, & keywords.</p>
    <form>
        <GradeSelector />
        <SubjectSelector />
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        {/* new Component that will populate with articles after a GET */}
      </div>
    </div>
    )
}

export default EducatorBrowse;