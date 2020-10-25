import React from "react";
import "./edBrowseEtc.css";

const GradeSelector = (props) => {
  return (
    <div className="boxes">
      <button className="button" onClick={props.handleGradeChange} name="k-5">K-5</button>
      <button className="button" onClick={props.handleGradeChange} name="6-8">6-8</button>
      <button className="button" onClick={props.handleGradeChange} name="9-12">9-12</button>
      <button className="button" onClick={props.resetFilters}>Reset Filters</button>
    </div>
  );
};

export default GradeSelector;
