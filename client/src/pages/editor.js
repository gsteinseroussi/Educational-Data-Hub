import React from "react";
import EditorPreview from "../components/editorPreview";
import EditorUpload from "../components/editorUpload";
import EducatorResults from "../components/educatorResults";
import "./editor.css";

const Editor = (props) => {
  return (
    <div className="editorPage">
      <div className="jumbotron">
        <h2 className="display-4">Where data meets implementation</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <EditorPreview />
          </div>
          <div className="col-md-6">
            <EditorUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

Editor.propTypes = {};

export default Editor;
