import React from "react";

const GradeSelector = () => {
  return (
    <div>
      <span>Grade Range: </span>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          K-5
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox3">
          6-8
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="option4"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox4">
          9-12
        </label>
      </div>
    </div>
  );
};

export default GradeSelector;
