import React, { useState, setState, useRef } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";


function MyDropzone(props) {
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
    title: "",
    description: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const dropRef = useRef();
  

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = () => {
      console.log("file:", reader.result);
    };
    reader.readAsDataURL(uploadedFile);
    dropRef.current.style.border = '2px dashed #FFFFFF';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #FFFFFF';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #FFFFFF'
    }
  };


   const handleOnSubmit = async (event) => {
    event.preventDefault();

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

  return (
    <div className="container">
      <h2>Upload File</h2>
      <div className="form-group">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <input
          className="form-control"
          onChange={handleInputChange}
          name="title"
          placeholder="Article File Name"
        ></input>
      </div>
      <div className="form-group">
        <input
          className="form-control mb-4"
          onChange={handleInputChange}
          name="description"
          placeholder="Description of Article File"
        ></input>
      </div>
      <div className="upload-section">
        <Dropzone onDrop={onDrop} onDragEnter={() => updateBorder('over')} onDragLeave={() => updateBorder('leave')}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} />
              <br/>
              <p>Drag and drop file or Click here to select</p>
              <br/>
              {file && (
                <div>
                  <strong>Selected file:</strong> {file.name}
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      { <button
        type="button"
        className="btn btn-secondary"
        onClick={handleOnSubmit}
      >
        Upload Article File (pdf, doc, xls, jpg accepted)
      </button> }
    </div>
  );
}

export default MyDropzone;
