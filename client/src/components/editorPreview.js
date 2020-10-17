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
            console.log("article:", article)})
            .catch(err=> console.log(err))
    }



// display the html 
    return (
        <div className="card">
      <div className="card-body">
        <div className="searchContainer">
    <h2>Article to Adapt:</h2>
    <p>{article?.articleName}</p>
    <p>{article?.researchDocLink}</p>
        </div>
      </div>
    </div>
    )
}

export default EditorPreview;