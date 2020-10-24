import React, { useState, useEffect } from "react";
import MyDropzone from "../components/dragAndDrop";
import axios from "axios";
import API from "../utils/articleAPI";
import FilesList from "../components/filesList";
import "./researcher.css";

function Researcher() {
  // set component's initial state
  const [formObject, setFormObject] = useState({});
  const [articleID, setArticleID] = useState("");

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //handle submit for article collection
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //creates article
    if (
      formObject.articleName &&
      formObject.authorName &&
      formObject.articleAbstract
    ) {
      API.saveArticle({
        articleName: formObject.articleName,
        authorName: formObject.authorName,
        articleAbstract: formObject.articleAbstract,
      })
        .then((res) => {
          console.log(res);
          setArticleID(res.data._id);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="researcherPage">
      <div className="jumbotron">
        <h1 className="display-4">Educational Data Stream</h1>
        <h2 className="subhead">Thank you for sharing your research</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="searchContainer">
                  <h2>How to submit your work</h2>
                  <ol>
                    <li>
                      Fill in & submit the form with your article's title, your
                      name and an abstract (up to 200 words)
                    </li>
                    <li>
                      Upload your article (PDF) using the drag-and-drop field or
                      the file search feature
                    </li>
                    <li>
                      That's it! Thank you for your contribution to education!
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <FilesList />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="searchContainer">
                  {!articleID ? (
                    <div>
                      <h2>Article Information</h2>
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
                        Submit Article Information
                      </button>
                    </div>
                  ) : (
                    <MyDropzone articleID={articleID} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Researcher;
