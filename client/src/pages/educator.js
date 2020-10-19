import React, { useState } from "react";
import EducatorBrowse from "../components/educatorBrowse";
import SyllabusPrev from "../components/syllabusPrev";
import Reviews from "../components/reviews";
import "./educator.css";


const Educator = (props) => {

  const [selectedLesson, setSelectedLesson] = useState({});
const viewDetails = () => {
console.log("Button clicked");

//now needs to retrieve the specific object and render to SyllabusPrev


}

  return (
    <div className="educatorPage">
      <div className="jumbotron">
        <h2 className="display-4">
          Browse our content to find the right resources for your classroom
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <EducatorBrowse setSelectedLesson={setSelectedLesson}/>
          </div>

          <div className="container">
            <div className="col-s-8">
              <SyllabusPrev selectedLesson={selectedLesson} />
              <Reviews lessonID={selectedLesson._id} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

Educator.propTypes = {};

export default Educator;
