import { Component } from "react";
import ButtonContex from "../ContexApi/ButtonContex";
import Navigation from "../Navigation/Navigation";

export default class Sidebar extends Component {
  //   static contextType = ButtonContex;
  render() {
    return (
      <div>
        <div>
          {/* <Navigation name={this.context} /> */}
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
