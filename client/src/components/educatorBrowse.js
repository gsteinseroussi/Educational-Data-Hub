import React from "react";

const EducatorBrowse = () => {
    return (
        <div className="card">
      <div className="card-body">
        <div className="searchContainer">
    <h2>Browse Fields:</h2>
    <p>Browse Lesson plans by grade level, subjects, learning competencies, & keywords.</p>
    <p>Grades:</p>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label className="form-check-label" htmlFor="inlineCheckbox1">1-5</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label className="form-check-label" htmlFor="inlineCheckbox2">5-8</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label className="form-check-label" htmlFor="inlineCheckbox2">9-12</label>
</div>


        </div>
      </div>
    </div>
    )
}

export default EducatorBrowse;