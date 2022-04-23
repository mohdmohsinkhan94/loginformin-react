import { Component } from "react";
import Dreams from "./Dreams";

export default class Cat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Dreams
        render={(mouse) => {
          return <img />;
        }}
      />
    );
  }
}
