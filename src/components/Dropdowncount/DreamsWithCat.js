import { Component } from "react";
import Cat from "./Cat";

export default class DreamsWithCat extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  mouseHnadle = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  render() {
    return (
      <div onMouseOver={this.mouseHnadle}>
        <div>Please move the mouse pointer</div>
        <div>
          position of mouse pointer is x:{this.state.x}, and y:{this.state.y}
        </div>
        <Cat mouse={this.state} />
      </div>
    );
  }
}
