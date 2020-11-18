//Thank you Yogesh Chavan for the fantastic tutorial on this feature https://medium.com/javascript-in-plain-english/implement-file-upload-and-download-functionality-using-mern-stack-with-image-preview-685bb989f4e8
import React, { useState, useEffect } from "react";
import download from "downloadjs";
import axios from "axios";
import "../pages/editor.css";

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    
    const getFilesList = async () => {
      try {
        const { data } = await axios.get("/api/files/getAllFiles");
        setErrorMsg("");
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`/api/files/download/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("error downloading file");
      }
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="files-container searchContainer">
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <table className="files-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Download File</th>
              </tr>
            </thead>
            <tbody>
              {filesList.length > 0 ? (
                filesList.map(
                  ({ _id, title, description, file_path, file_mimetype }) => (
                    <tr key={_id}>
                      <td className="file-title">{title}</td>
                      <td className="file-description">{description}</td>
                      <td>
                        <a
                          href="#/"
                          onClick={() =>
                            downloadFile(_id, file_path, file_mimetype)
                          }
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={3} style={{ fontWeight: "300" }}>
                    No files found. Please add some.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FilesList;
