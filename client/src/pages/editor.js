import React from "react";
import EditorPreview from "../components/editorPreview";
import EditorUpload from "../components/editorUpload";
import EducatorResults from "../components/educatorResults";
import "./editor.css";

const Editor = (props) => {
  return (
    <div className="editorPage">
      <div className="jumbotron">
        <h1 className="display-4">Educational Data Stream</h1>
        <h2 className="subhead">Where data meets implementation</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="searchContainer">
                  <h2>How to use this page</h2>
                  <ol>
                    <li>
                      Process the article presented to you upon loading the
                      editorPage
                    </li>
                    <li>
                      Create lesson plans and place them in a Google document
                    </li>
                    <li>
                      Adjust the "Share" settings so anyone with a link can edit
                    </li>
                    <li>
                      Complete the form & submit the lesson plan link as a
                      Google document
                    </li>
                  </ol>
                </div>
              </div>
            </div>
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
