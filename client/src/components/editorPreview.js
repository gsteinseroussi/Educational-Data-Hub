import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../utils/articleAPI";

const EditorPreview = () => {
  const [article, setArticle] = useState({});

  //loads article to edit into the assigned area
  useEffect(() => {
    loadArticle();
  }, []);

  useEffect(() => {
    console.log("Value of article in state", article);
    if (!article) {
      return;
    } else {
      claimArticle(article._id);
    }
  }, [article]);

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
              <h2>Article to Adapt:</h2>
              <h4>Title: {article.articleName}</h4>
              <p>Link: {article.researchDocLink}</p>
              <p>Description: {article.articleAbstract}</p>
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
