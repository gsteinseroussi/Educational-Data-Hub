import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../utils/articleAPI";

import "../pages/editor.css";

const EditorPreview = () => {
  const [article, setArticle] = useState({});
  const [file, setFile] = useState({});

  //loads article to edit into the assigned area
  useEffect(() => {
    loadArticle();
  }, []);

  //finds the article selected to edit and sets it to article
  function loadArticle() {
    API.getAssignedArticle()
      .then((res) => {
        const newResArray = [];
        console.log("res", res);
        res.data.map((article) => {
          if (!article.claimed) {
            newResArray.push(article);
          }
        });
        console.log(newResArray);
        setArticle(newResArray[0]);
      })
      .catch((err) => console.log(err));
  }

  function claimArticle(id) {
    API.claimArticle(id)
      .then((res) => res.json)
      .catch((err) => console.log(err));
  }

  // display the html
  return (
    <div className="card">
      <div className="card-body">
        <div className="searchContainer">
          {article ? (
            <div>
              <h2>
                <u>Assigned Article</u>
              </h2>
              <h4>Title: {article.articleName}</h4>
              <p>Link: {article.researchDocLink}</p>
              <p>Description: {article.articleAbstract}</p>
              <p>File: {article.fileArray && article.fileArray[0].title}</p>
            </div>
          ) : (
            <h3>No Articles to Adapt</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPreview;
