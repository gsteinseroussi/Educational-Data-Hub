import React from "react";
import EducatorBrowse from "../components/educatorBrowse";
import SyllabusPrev from "../components/syllabusPrev";
import Reviews from "../components/reviews";
import "./educator.css";

const Educator = (props) => {
  return (
    <div className="educatorPage">
      <div className="jumbotron">
        <h2 className="display-4">
          Browse our content to find the right resources for your classroom
        </h2>
        <div className="row">
          <div className="col-s-4">
            <EducatorBrowse />
          </div>
          <div className="container">
            <div className="col-s-8">
              <SyllabusPrev />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Educator.propTypes = {};

export default Educator;
