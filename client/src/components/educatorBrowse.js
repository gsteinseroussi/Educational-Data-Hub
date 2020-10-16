import React, { useState } from "react";
import GradeSelector from "./gradeSelector";
import { List, ListItem } from "./educatorResults";
import API from "../utils/API";
// import SubjectSelector from "./subjectSelector";

const EducatorBrowse = () => {
  const [gradeChoices, setGradeChoices] = useState({"k-5": false, "6-8": false, "9-12": false})
  const foundArticles = []

  const handleGradeChange = (event)=>{
    setGradeChoices({...gradeChoices, [event.target.name]: event.target.checked})
  }
  const search = function (event) {
    event.preventDefault();
    // const gradeLevels = Object.keys(gradeChoices).map(grade => {
    //   if(gradeChoices[grade]){
    //     return grade;
    //   }
    // }).filter(grade => grade);
    // console.log(gradeLevels);
    API.getArticleByGrade(gradeChoices)
    .then((results)=>{  
      console.log("results", results)
      foundArticles.push(results.data[0]);
      console.log("foundArticles", foundArticles);
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
            {foundArticles.length ? (
              <List>
                {foundArticles.map(article => (
                  <ListItem key={article._id}>
                    {article.articleName}
                  </ListItem>
                ))}
              </List>
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
