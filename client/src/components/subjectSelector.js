import React from "react";

const SubjectSelector = () => {
  return (
    <div>
      <label forhtml="subject">Subject: </label>
      <select name="subject" id="subject">
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="socialStudies">Social Studies</option>
        <option value="languageArts">Language Arts</option>
        <option value="fineArts">Fine Arts</option>
        <option value="physicalEducation">Physical Education</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default SubjectSelector;
