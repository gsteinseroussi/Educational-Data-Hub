import React, { useState, useEffect } from "react";
//import API from "../utils/API";

function Researcher() {
  // set component's initial state
  const [formObject, setFormObject] = useState({});

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //hanlde form submit uses API.saveArticle method to save data
  /* function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.docLink &&
      formObject.articleName &&
      formObject.authorName &&
      formObject.articleAbstract
    ) {
      API.saveArticle({
        docLink: formObject.docLink,
        articleName: formObject.articleName,
        authorName: formObject.authorName,
        articleAbstract: formObject.articleAbstract
      })
        .then(console.log(req.body))
        .catch((err) => console.log(err));
    }
  } */
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <div className="container">
              <h2>Directions for Researchers</h2>
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
                name="articleName"
                placeholder="Article Name (required)"
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control mb-4"
                onChange={handleInputChange}
                name="authorName"
                placeholder="Author Name (required)"
              ></input>
              <div className="form-group">
                <textarea
                  className="form-control mb-4"
                  onChange={handleInputChange}
                  name="articleAbstract"
                  rows="6"
                  placeholder="Abstract (required)"
                ></textarea>
                <button type="button" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Researcher;
