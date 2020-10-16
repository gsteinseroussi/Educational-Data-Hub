import React, { useState, useEffect } from "react";
import API from "../utils/lessonAPI";

function EditorUpload() {
  // set component's initial state
  const [formObject, setFormObject] = useState({});

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //handle form submit uses API.saveLesson method to save data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.researchDocLink &&
      formObject.lessonName &&
      formObject.authorName &&
      formObject.lessonAbstract
    ) {
      API.saveLesson({
        researchDocLink: formObject.researchDocLink,
        lessonName: formObject.lessonName,
        authorName: formObject.authorName,
        lessonAbstract: formObject.lessonAbstract
      })
        .then(console.log(formObject))
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <div className="container">
              <h2>Directions for Editors</h2>
              <p> Explanations about what to enter</p>
              <p> Directions for permissions on Google Doc Submission</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="jumbotron">
            <h2>Upload Form</h2>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleInputChange}
                name="lessonName"
                placeholder="Lesson Plan Name (required)"
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control mb-4"
                onChange={handleInputChange}
                name="authorName"
                placeholder="Author Name (required)"
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control mb-4"
                onChange={handleInputChange}
                name="researchDocLink"
                placeholder="Google Docs Link (required)"
              ></input>
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-4"
                onChange={handleInputChange}
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
    </div>
  );
}

export default EditorUpload;
