import React, { useState } from "react";
import "./Addposts.css";
import axios from "axios";

function AddPosts(props) {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  function SubmitHandler(e) {
    e.preventDefault();
    const FormData = {
      title,
      descriptions,
    };
    axios
      .post(
        `https://react-course-10975-default-rtdb.firebaseio.com/posts.json`,
        FormData
      )
      .then((response) => {
        props.onPostAdded();
      });
  }
  return (
    <div className="Addpost">
      <form onSubmit={SubmitHandler}>
        <input
          className="input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add The Post "
          value={title}
        />
        <input
          onChange={(e) => setDescriptions(e.target.value)}
          placeholder="Add The Descriptions "
          value={descriptions}
          className="input"
        />
        <div className="Addbtn">
          <button className="btn" type="submit">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPosts;
