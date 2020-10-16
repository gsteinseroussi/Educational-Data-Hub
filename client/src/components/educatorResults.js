import React, { useState, useEffect } from "react";
import LessonPlan from './LessonPlan'
import axios from 'axios'
import API from '../utils/API'

//make so that it isn't always present, but populates after "submit" with results of search

const EducatorResults = () => {
  
  const [ lessonPlan, setLessonPlan ] = useState([])

  useEffect(() => {
    axios.get('/api/articles').then(response => {
      console.log(response.data)
      setLessonPlan(response.data)
    })
  },[])

  return (
    <div>
      <ol>
       {lessonPlan?.map(article => <LessonPlan key={article.key} article={article} /> )}
      </ol>
    </div>
  );
};

export default EducatorResults;
