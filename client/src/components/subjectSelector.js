import React from "react";

const SubjectSelector = () => {
    return(
       <div>
    <label for="cars">Subject: </label>
  <select name="cars" id="cars">
    <option value="math">Math</option>
    <option value="socialStudies">Social Studies</option>
    <option value="languageArts">Language Arts</option>
  </select>
  </div>
    )
}

export default SubjectSelector;