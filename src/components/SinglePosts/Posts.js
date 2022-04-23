import { Component } from "react";
import Post from "./Post";
import "./Posts.css";
import axios from "axios";
import PostDetails from "../SelectedPost/PostDetails";
import FunctionalPostDetails from "../FunctionalPostDetails/FunctionalPostDetails";
import AddPosts from "../Addpost/AddPosts";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      singlepostId: null,
      isPostAdded: false,
    };
  }
  componentDidMount() {
    this.getPost();
  }
  getPost = () => {
    this.setState({
      isPostAdded: false,
    });
    axios
      .get(`https://react-course-10975-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        const posts = [];
        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }
        this.setState({
          posts: posts,
        });
      });
  };
  onPostclickedHandler = (id) => {
    this.setState({ singlepostId: id });
  };
  onAddPostHandler = () => {
    this.setState({
      isPostAdded: true,
    });
  };
  deletePostHandler = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are sure you want to delete")) {
      axios
        .delete(
          `https://react-course-10975-default-rtdb.firebaseio.com/posts/${id}.json`
        )
        .then((response) => {
          this.getPost();
        });
    }
  };
  render() {
    const posts = this.state.posts.map((posts) => {
      return (
        <Post
          posts={posts}
          key={posts.id}
          postClicked={this.onPostclickedHandler.bind(this, posts.id)}
          onDeletePost={this.deletePostHandler.bind(this, posts.id)}
        />
      );
    });
    return (
      <div>
        <div className="posts-wraper">
          <div className="button">
            <a href="#" className="buttonPost" onClick={this.onAddPostHandler}>
              Create Posts
            </a>
          </div>
          <div className="posts-wraper2">{posts}</div>
        </div>
        {this.state.singlepostId && (
          //   <PostDetails id={this.state.singlepostId} />
          <FunctionalPostDetails id={this.state.singlepostId} />
        )}
        {this.state.isPostAdded && (
          <div>
            <AddPosts onPostAdded={this.getPost} />
          </div>
        )}
      </div>
    );
  }
}
