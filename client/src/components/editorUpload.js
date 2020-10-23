import React, { useState, useEffect } from "react";
import API from "../utils/lessonAPI";
import GradeSelector from "./gradeSelector";

function EditorUpload() {
  // set component's initial state
  const [formObject, setFormObject] = useState({
    researchDocLink: "",
    authorName: "",
    lessonAbstract: "",
    lessonName: "",
  });
  const [gradeChoices, setGradeChoices] = useState({
    "k-5": false,
    "6-8": false,
    "9-12": false,
  });

  const handleGradeChange = (event) => {
    setGradeChoices({
      ...gradeChoices,
      [event.target.name]: event.target.checked,
    });
  };

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //handle form submit uses API.saveLesson method to save data
  function handleFormSubmit(event) {
    event.preventDefault();
    // if either of the respective boxes is checked, add selection to array to add to database
    let gradeLevel = [];
    if (gradeChoices["k-5"]) gradeLevel.push("k-5");
    if (gradeChoices["6-8"]) gradeLevel.push("6-8");
    if (gradeChoices["9-12"]) gradeLevel.push("9-12");

    // checking to make sure that all the input boxes are selected
    if (
      formObject.researchDocLink &&
      formObject.lessonName &&
      formObject.authorName &&
      formObject.lessonAbstract &&
      gradeLevel.length
    ) {
      API.saveLesson({
        researchDocLink: formObject.researchDocLink,
        lessonName: formObject.lessonName,
        authorName: formObject.authorName,
        lessonAbstract: formObject.lessonAbstract,
        gradeLevel,
      })
        .then((res) =>
          setFormObject({
            researchDocLink: "",
            authorName: "",
            lessonAbstract: "",
            lessonName: "",
          })
        )
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          <h2>Upload Form</h2>
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleInputChange}
              value={formObject.lessonName}
              name="lessonName"
              placeholder="Lesson Plan Name (required)"
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              value={formObject.authorName}
              name="authorName"
              placeholder="Author Name (required)"
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              value={formObject.researchDocLink}
              name="researchDocLink"
              placeholder="Google Docs Link (required)"
            ></input>
          </div>
          <GradeSelector
            gradeChoices={gradeChoices}
            onChange={handleGradeChange}
          />
          <div className="form-group">
            <textarea
              className="form-control mb-4"
              onChange={handleInputChange}
              value={formObject.lessonAbstract}
              name="lessonAbstract"
              rows="6"
              placeholder="Abstract (required)"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorUpload;
