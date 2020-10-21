import React, { useState, useEffect } from "react";
import GradeSelector from "./gradeSelector";
import { List, ListItem } from "./educatorResults";
import API from "../utils/lessonAPI";
import { Link } from "react-router-dom";
// import SubjectSelector from "./subjectSelector";

const EducatorBrowse = (props) => {
  const [gradeChoices, setGradeChoices] = useState({"k-5": false, "6-8": false, "9-12": false})
  const foundLessons = []
  const [lessons, setLessons] = useState([])


  useEffect(() => {
    console.log('Value of lessons in state', lessons);
 }, [lessons]);

  const handleGradeChange = (event)=>{
    event.preventDefault();
    setGradeChoices({...gradeChoices, [event.target.name]: event.target.checked})
  }
  const search = function (event) {
    event.preventDefault();
    
    API.getLessonByGrade(gradeChoices)
    .then((results)=>{  
      console.log("results", results)
      foundLessons.push(results.data[0]);
      console.log(foundLessons)

      setLessons([...foundLessons])

      // console.log(lessons)
    })
    
  }

  

  
  return (
    <div className="browse card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Browse Fields</h2>
          <p>Browse Lesson plans by grades.</p>
          <form>
            <GradeSelector gradeChoices={gradeChoices} onChange={handleGradeChange}/>
            <input type="submit" value="Submit" onClick={search} ></input>
          </form>
          <div className="p-4 educatorResults">
            {lessons.length > 0 ? (
              <ul>
                {lessons.map(lesson => (
                  <li key={lesson._id}>
                   <h3>{lesson.lessonName}</h3>
                    {lesson.lessonAbstract}
                    <br></br>

                    <button onClick={e => props.viewDetails(e.target.value)} value={lesson._id}>View Details</button>

                    </li>
                ))}
              </ul>
            
              
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorBrowse;
