import React, { useState, useEffect } from "react";
import API from "../utils/articleAPI";

const EditorPreview = () => {

    const [article, setArticle] = useState({});
    

    //loads article to edit into the assigned area
    useEffect(()=>{
        loadArticle()
        
    }, [])

    //finds the article selected to edit and sets it to article
    function loadArticle(){
        API.getAssignedArticle()
        .then(res=>
           { 
               console.log("res", res);
               setArticle(res.data[0]);
               claimArticle();
        })
            .catch(err=> console.log(err))
    };

        function claimArticle (article){
            console.log(article)
            API.claimArticle(article._id)
        };
   

// display the html 
    return (
        <div className="card">
      <div className="card-body">
        <div className="searchContainer">
    <h2>Article to Adapt:</h2>
    <h3>Title: {article?.articleName}</h3>
    <p>Link: {article?.researchDocLink}</p>
    <p>Description: {article?.articleAbstract}</p>
        </div>
      </div>
    </div>
    )
}

export default EditorPreview;