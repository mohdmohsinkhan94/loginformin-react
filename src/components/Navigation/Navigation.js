import { Component } from "react";
import ButtonContex from "../ContexApi/ButtonContex";
import UserContext from "../UserContext/UserContext";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
