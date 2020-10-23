import React, { useState, useEffect } from "react";

import MyDropzone from "../components/dragAndDrop";
import axios from "axios";
import API from "../utils/articleAPI";
import FilesList from "../components/filesList";

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
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <div className="container">
              <h2>Directions for Researchers</h2>
              <br />
              <p>
                Welcome to the Educational Data Stream, where your research can
                impact K-12 students across the United States! Please first
                complete the Article Information with the Article Name, Author
                Name, and a brief abstract. Then, upload your Article
                Information.{" "}
              </p>
              <p>
                Then, upload your file. You can then drag and drop your file in
                the dropzone, or click to browse. Enter a name for the file to
                be saved as and a brief description.
              </p>
              <p>
                After you submit, our editors will curate content for educators
                to access and put your research to work shaping future
                generations.
              </p>
              <p>Thank you!</p>
              <p>-The EDS Team-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="jumbotron">
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
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <FilesList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Researcher;
