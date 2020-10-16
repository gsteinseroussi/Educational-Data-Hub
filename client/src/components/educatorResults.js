import React, { useState, useEffect } from "react";
import LessonPlan from './LessonPlan'
import axios from 'axios'
import API from '../utils/API'


// component to disolay educator results
const EducatorResults = () => {
  // setting state for lesson plan, which is what the editor uploads to the database
  const [ lessonPlan, setLessonPlan ] = useState([])
// retrieving lesson plan from database
  useEffect(() => {
    axios.get('/api/lessonplan').then(response => {
      console.log(response.data)
      // setting new state for lesson plan based on query
      setLessonPlan(response.data)
    })
  },[])

  // will display the lesson plan
  return (
    <div>
      <ol>
       {lessonPlan?.map(article => <LessonPlan key={article.key} article={article} /> )}
      </ol>
      </div>
  );
}



export default EducatorResults;

export function List ({ children }){
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>

    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}