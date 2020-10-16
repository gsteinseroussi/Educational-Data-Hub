import React from "react";
import API from "../utils/articleAPI";

const GradeSelector = (props) => {





  return (
    <div>
      <span>Grade Range: </span>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value={props.gradeChoices["k-5"]}
          onChange={props.onChange}
          name="k-5"
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
          value={props.gradeChoices["6-8"]}
          onChange={props.onChange}
          name="6-8"
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
          value={props.gradeChoices["9-12"]}
          onChange={props.onChange}
          name="9-12"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox4">
          9-12
        </label>
      </div>
     
    </div>
  );
};

export default GradeSelector;
