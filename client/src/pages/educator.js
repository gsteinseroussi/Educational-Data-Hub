import React, { useState } from "react";
import EducatorBrowse from "../components/educatorBrowse";
import SyllabusPrev from "../components/syllabusPrev";
import Reviews from "../components/reviews";
import "./educator.css";
import lessonAPI from "../utils/lessonAPI";


const Educator = (props) => {

  const [selectedLesson, setSelectedLesson] = useState({});
const viewDetails = (id) => {

console.log("Button clicked", id);
// console.log(id)

//now needs to retrieve the specific object and render to SyllabusPrev
// lessonAPI.getLessonByID(id)
// .then((result)=>{
  
//   console.log(result)
  
// })

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
            <EducatorBrowse viewDetails={viewDetails}/>
          </div>

          <div className="container">
            <div className="col-s-8">
              <SyllabusPrev />
              <Reviews lessonID="1" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

Educator.propTypes = {};

export default Educator;
