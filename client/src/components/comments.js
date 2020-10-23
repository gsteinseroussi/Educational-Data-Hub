import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../utils/commentAPI";
import { formatRelative } from "date-fns";
import "./edBrowseEtc.css";

// component to display comments
const Comments = (props) => {
  console.log("props for Comments", props.lesson);
  // setting state for comments
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  //retrieving comments from database
  // useEffect(() => {
  //   //   make sure the comment is attached to the lessonID
  //   API.getComments(props.lessonID).then((response) => {
  //     console.log(response.data);
  //     // setting new state for comments
  //     setComments(response.data);
  //   });
  // }, []);

  function handleCommentSubmit(event) {
    event.preventDefault();
    if (!input) return;
    console.log(props.lessonID);
    API.saveComments(input, props.lessonID).then((response) => {
      console.log(response);
      setInput("");
    });
  }

  // will display the comments
  return (
    <div>
      <ol>
        {props.lesson.commentArray?.map((comment) => (
          <li>
            <p>{comment.message}</p>
            <p>{comment.userName}</p>
            <p>
              {comment.date &&
                formatRelative(new Date(comment.date), new Date())}
            </p>
          </li>
        ))}
      </ol>

      <form onSubmit={handleCommentSubmit}>
        <label>
          <textarea
            placeholder="Thank you for reviewing this lesson. Please make this box as large as you like."
            className="commentBox"
            type="text"
            name="textbox"
            row="10"
            cols="75"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Comments;
