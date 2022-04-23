import axios from "axios";
import { Component } from "react";
import "./PostDetails.css";
export default class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  componentDidMount() {
    this.getPostDetails();
  }
  componentDidUpdate() {
    if (this.state.posts && this.state.posts.id === this.props.id) {
      return;
    }
    this.getPostDetails();
  }
  getPostDetails = () => {
    axios
      .get(
        `https://react-course-10975-default-rtdb.firebaseio.com/posts/${this.props.id}.json`
      )
      .then((Response) => {
        this.setState({
          posts: { ...Response.data, id: this.props.id },
        });
      });
  };
  render() {
    return (
      <div className="postDetails">
        <h2 className="heading">Post data</h2>
        {this.state.posts && (
          <div>
            <div>Id:{this.state.posts.id}</div>
            <div>Title:{this.state.posts.title}</div>
            <div>Description:{this.state.posts.descriptions}</div>
          </div>
        )}
      </div>
    );
  }
}
