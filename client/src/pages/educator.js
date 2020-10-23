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
    lessonAPI.getLessonByID(id).then((result) => {
      console.log(result.data);
      setSelectedLesson(result.data);
      console.log(selectedLesson);
    });
  };

  return (
    <div className="educatorPage">
      <div className="jumbotron">
        <h1 className="display-4">Educational Data Stream</h1>
        <h2 className="subhead">
          Browse our content to find the right resources for your classroom
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="searchContainer">
                  <h2>How to use this page</h2>
                  <ol>
                    <li>Select the grade ranges you teach</li>
                    <li>Preview selected lesson plans on the screen</li>
                    <li>Read comments left by other educators</li>
                    <li>Download what you like</li>
                    <li>Come back to leave your review</li>
                  </ol>
                </div>
              </div>
            </div>
            <EducatorBrowse
              setSelectedLesson={setSelectedLesson}
              viewDetails={viewDetails}
            />
          </div>
          <div className="col-sm-8">
            <SyllabusPrev selectedLesson={selectedLesson} />
            <Reviews lessonID={selectedLesson._id} lesson={selectedLesson} />
          </div>
        </div>
      </div>
    </div>
  );
};

Educator.propTypes = {};

export default Educator;
