import axios from "axios";
import "./FunctionalPostDetails.css";
import React, { useEffect, useState } from "react";

function FunctionalPostDetails(props) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    if (posts && posts.id === props.id) {
      return;
    }
    getPostDetails();
  });
  function getPostDetails() {
    axios
      .get(
        `https://react-course-10975-default-rtdb.firebaseio.com/posts/${props.id}.json`
      )
      .then((Response) => {
        setPosts({ ...Response.data, id: props.id });
      });
  }
  if (posts) {
    return (
      <div className="postDetails">
        <h2 className="Heading">Post Details </h2>
        <div>ID:{posts.id}</div>
        <div>Title:{posts.title}</div>
        <div>Description:{posts.descriptions}</div>
      </div>
    );
  }
  return null;
}

export default FunctionalPostDetails;
