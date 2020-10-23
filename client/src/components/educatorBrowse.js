import React, { useState, useEffect } from "react";
import GradeSelector from "./gradeSelector";
import API from "../utils/lessonAPI";


const EducatorBrowse = (props) => {
  const [gradeChoices, setGradeChoices] = useState([])
  const foundLessons = []
  const [lessons, setLessons] = useState([])
  const [filteredLessons, setFilteredLessons] = useState([]);

  useEffect(() => {
    API.getAll()
    .then((results)=> {
      setLessons(results.data)
      setFilteredLessons(results.data)
    })
  }, [])


  useEffect(() => {
    console.log('Value of lessons in state', lessons);
 }, [lessons]);


  const handleGradeChange = (event)=>{
    event.preventDefault();

    console.log(event.target.name)

    const newFilter = lessons.filter(lesson => lesson.gradeLevel[0] === event.target.name)
    setFilteredLessons(newFilter)
   }

  

  
  return (
    <div className="browse card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Browse Fields</h2>
          <p>Browse Lesson plans by grades.</p>
          <form>
            <GradeSelector gradeChoices={gradeChoices} onChange={handleGradeChange}/>
          </form>
          <div className="p-4 educatorResults">
            {filteredLessons.length > 0 ? (
              <ul>
                {filteredLessons.map(lesson => (
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
