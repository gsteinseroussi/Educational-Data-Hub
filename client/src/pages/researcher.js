import React, { useState, useEffect } from "react";

import MyDropzone from "../components/dragAndDrop";
import articleAPI from "../utils/articleAPI";

function Researcher() {
  // set component's initial state
  const [formObject, setFormObject] = useState({});

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //handle form submit uses API.saveArticle method to save data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.researchDocLink &&
      formObject.articleName &&
      formObject.authorName &&
      formObject.articleAbstract
    ) {
      articleAPI
        .saveArticle({
          researchDocLink: formObject.researchDocLink,
          articleName: formObject.articleName,
          authorName: formObject.authorName,
          articleAbstract: formObject.articleAbstract,
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
              <h2>Directions for Researchers</h2>
              <MyDropzone />
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
                name="articleAbstract"
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

export default Researcher;
