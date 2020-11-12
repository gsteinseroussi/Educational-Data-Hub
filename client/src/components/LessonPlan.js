// importing necessary dependencies
import React from "react";

// lesson plan component
const LessonPlan = ({ article }) => {
  console.log(article);
  return (
    <div onClick={(article) => console.log(article._id)}>
      Lesson Plan
      {article.articleName}
      {article.articleAbstract}
    </div>
  );
};

export default LessonPlan;
