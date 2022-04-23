import React from "react";
import "./Posts.css";
function Post(props) {
  return (
    <div className="post">
      <a href="#" onClick={props.postClicked}>
        <div>id: {props.posts.id}</div>
        <div>title:{props.posts.title}</div>
        <div>Description:{props.posts.descriptions}</div>
        <button className="deletepost" onClick={props.onDeletePost}>
          Delete Post
        </button>
      </a>
    </div>
  );
}

export default Post;
