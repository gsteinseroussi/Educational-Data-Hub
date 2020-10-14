import React from "react";
import EducatorBrowse from "../components/educatorBrowse";
import SyllabusPrev from "../components/syllabusPrev";
import "./educator.css";

const Educator = (props) => {
  return (
    <div className="educatorPage">
      <div className="jumbotron">
        <h1 className="display-4">
          Find the right resources for your classroom in our curated syllabus
          content
        </h1>
        <div className="row">
          <div className="col-md-6">
            <EducatorBrowse />
          </div>
          <div className="col-md-6">
            <SyllabusPrev />
          </div>
        </div>
      </div>
    </div>
  );
};

Educator.propTypes = {};

export default Educator;
