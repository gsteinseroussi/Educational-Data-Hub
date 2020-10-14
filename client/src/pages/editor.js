import React from "react";
import EditorPreview from "../components/editorPreview";

const Editor = (props) => {
  return(
  <div className="editorPage">
  <div className="jumbotron">
      <h1 className="display-4">Curate your masterpiece syllabus</h1>
      <div className="row">
        <div className="col-md-6">
    <EditorPreview />
    </div>
    <div className="col-md-6">
    
    </div>
      </div>
    </div>
    </div>)
  
  
};

Editor.propTypes = {};

export default Editor;
