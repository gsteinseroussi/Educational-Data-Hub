import React, { useState, useEffect } from "react";
import GradeSelector from "./gradeSelector";
import API from "../utils/lessonAPI";
import "./edBrowseEtc.css";

const EducatorBrowse = (props) => {
  const [gradeChoices, setGradeChoices] = useState([]);
  const foundLessons = [];
  const [lessons, setLessons] = useState([]);
  const [filteredLessons, setFilteredLessons] = useState([]);

  useEffect(() => {
    API.getAll().then((results) => {
      setLessons(results.data);
      
    });
  }, []);

  useEffect(() => {
    console.log("Value of lessons in state", lessons);
  }, [lessons]);

  const handleGradeChange = (event) => {
    event.preventDefault();
    setFilteredLessons(...lessons);
    console.log(event.target.name);

    const newFilter = lessons.filter(
      (lesson) => lesson.gradeLevel[0] === event.target.name
    );
    setFilteredLessons(newFilter);
  };

  const resetFilters = (event) => {
    event.preventDefault();
    setFilteredLessons([]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Grade ranges</h2>
          <p>Select a grade range. Results will display below.</p>
          <form>
            <GradeSelector handleGradeChange={handleGradeChange} resetFilters={resetFilters}/>
            <h4 className="resalts">
              <u>Results</u>
            </h4>
          </form>
          <div className="educatorResults darkFont">
            {filteredLessons.length > 0 ? (
              <ul className="list-group">
                {filteredLessons.map((lesson) => (
                  <li className="list-group-item" key={lesson._id}>
                    <h5>{lesson.lessonName}</h5>
                    <p className="abstract">{lesson.lessonAbstract}</p>
                    <button
                      onClick={(e) => props.viewDetails(e.target.value)}
                      value={lesson._id}
                    >
                      View Details
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="lightFont">No grade range selected</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorBrowse;
