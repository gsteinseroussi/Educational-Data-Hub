import React, { useState, useEffect, useRef } from "react";

import MyDropzone from "../components/dragAndDrop";
import axios from "axios";


import API from "../utils/articleAPI";
import FilesList from "../components/filesList"




function Researcher() {
  // set component's initial state
  const [formObject, setFormObject] = useState({});
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
    title: "",
    description: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const dropRef = useRef();

  //update component state when the user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //handle submit for the file drop
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    //creates article
    if (
      formObject.researchDocLink &&
      formObject.articleName &&
      formObject.authorName &&
      formObject.articleAbstract
    ) {
      API
        .saveArticle({
          researchDocLink: formObject.researchDocLink,
          articleName: formObject.articleName,
          authorName: formObject.authorName,
          articleAbstract: formObject.articleAbstract,
        })
        .then(console.log(formObject))
        .catch((err) => console.log(err));
    }
    //creates file
    try {
      const { title, description } = state;
      if (title.trim() !== "" && description.trim() !== "") {
        console.log(file);
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          formData.append("description", description);

          setErrorMsg("");
          await axios.post(`/api/files/upload`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all field values");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };


  //handle form submit uses API.saveArticle method to save data
  // function handleFormSubmit(event) {
  //   event.preventDefault();
    
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <div className="container">
              <h2>Directions for Researchers</h2>
              
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
              <textarea
                className="form-control mb-4"
                onChange={handleInputChange}
                name="articleAbstract"
                rows="6"
                placeholder="Abstract (required)"
              ></textarea>
            </div>
            <div className="form-conrol mb-4">
            <MyDropzone />
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleOnSubmit}
            >
              Submit
            </button>
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
